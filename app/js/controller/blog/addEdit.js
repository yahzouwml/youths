app.controller('addEditCtrl', function($rootScope, $scope, apiServices, $stateParams) {
  var editor = angular.element('#edit')
  var selectEditTag = ''
  if (!!$stateParams.id) {
    apiServices.blogFindById({
      id: $stateParams.id,
      filter: {
        include: [{
          'comments': ['commentLikes', 'user', {
            'replies': ['replyLikes', 'user']
          }]
        }, 'tagRelations']
      }
    }).then(function(response) {
      console.log(response)
      $scope.blog = response
      editor.froalaEditor('html.set', response.content);
      selectEditTag = $scope.selectTag = setTags($scope.blog.tagRelations)
      $scope.$broadcast('loaded')
    })
  }

  var args = []
  apiServices.tagFind({
    where: {
      type: 'blog'
    }
  }).then(function(data) {
    $('#input-tags').selectize({
      persist: false,
      createOnBlur: true,
      create: false,
      maxItems: 3,
      valueField: 'id',
      labelField: 'name',
      searchField: 'name',
      options: data,
      sortField: {
        field: 'name',
        direction: 'asc'
      }
    })
  }, function(err) {
    console.log(err)
  })

  $scope.addBlog = function() {
    if (!!$stateParams.id) {
      console.log(getAddTags(), getDeleteTags())
      edit()
    } else {
      create()
    }
  }

  function setTags(tagRelations) {
    var string = ''
    for (var i in tagRelations) {
      string += tagRelations[i].tagId + ','
    }
    return string
  }

  function getTags(blogId) {
    var args = $scope.selectTag.split(',')
    var tagRelations = new Array()
    for (var i in args) {
      tagRelations.push({
        tagId: args[i],
        otherId: blogId,
        type: 'blog'
      })
    }
    return tagRelations
  }


  function getAddTags() {
    var args = $scope.selectTag.split(',')
    var tagRelations = new Array()
    for (var i in args) {
      if (selectEditTag.indexOf(args[i]) > -1) continue;
      tagRelations.push({
        tagId: args[i],
        otherId: $stateParams.id,
        type: 'blog'
      })
    }
    return tagRelations
  }


  function getDeleteTags(blogId) {
    var args = $scope.blog.tagRelations
    var tagRelations = new Array()
    for (var i in args) {
      if ($scope.selectTag.indexOf(args[i].tagId) > -1) continue;
      tagRelations.push({
        id: args[i].id
      })
    }
    return tagRelations
  }


  function create() {
    apiServices.blogCreate({
      title: $scope.blog.title,
      userId: $rootScope.currentUser.id,
      content: editor.froalaEditor('html.get', true),
      click: 0
    }).then(
      function(response) {
        console.log(response)
        apiServices.tagreleationCreateMany(getTags()).then(function(response) {
          console.log(response)
          $scope.blog = {}
          $scope.selectTag = ''
          editor.froalaEditor('html.set', '');
          $scope.successAfter($scope.form.form1, '添加博客成功')
        }, function(err) {
          console.log(err)
        })
      },
      function(err) {
        console.log(err)
        $scope.notify('error', '添加博客失败')
      }
    )
  }

  function edit() {
    apiServices.blogUpdateById({
      id: $stateParams.id
    }, {
      title: $scope.blog.title,
      content: editor.froalaEditor('html.get', true)
    }).then(function(data) {
      $scope.blog = {}
      $scope.selectTag = ''
      editor.froalaEditor('html.set', '')
      $scope.successAfter($scope.form.form1, '修改博客成功')
        // apiServices.tagreleationDestoryAll(getDeleteTags()).then(function(data) {
        //   console.log(data)
        // }, function(err) {
        //   console.log(err)
        // })
        // apiServices.tagreleationCreateMany(getAddTags()).then(function(response) {
        //   console.log(response)
        //   $scope.blog = {}
        //   $scope.selectTag = ''
        //   $scope.successAfter($scope.form.form1, '修改博客成功')
        // }, function(err) {
        //   console.log(err)
        // })
    })
  }

  editor.froalaEditor({
      inlineMode: false,
      language: 'zh_cn',
      height: 500,
      codeBeautifier: true,
      imageUploadMethod: 'POST',
      imageUploadURL: $rootScope.apiHost + '/upload',
      imageUploadParams: {
        containerName: 'blog',
        userId: $rootScope.currentUser.id
      },
      codeMirror: {
        indentWithTabs: true,
        lineNumbers: true,
        lineWrapping: true,
        mode: 'text/html',
        tabMode: 'indent',
        tabSize: 2
      },
      buttons: [
        'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'formatBlock', 'blockStyle', 'inlineStyle', 'align', 'insertOrderedList', 'insertUnorderedList', 'outdent', 'indent', 'selectAll', 'createLink', 'insertImage', 'insertVideo', 'table', 'undo', 'redo', 'html', 'save', 'insertHorizontalRule', 'uploadFile', 'removeFormat', 'fullscreen'
      ],
      placeholder: '输入点什么吧...',
      colors: [
        '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
        '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
      ],
      colorsStep: 10,
      customButtons: {
        clear: {
          title: 'Clear HTML',
          icon: {
            type: 'txt',
            value: 'x'
          },
          callback: function() {
            this.setHTML('');
            this.focus();
          },
          refresh: function() {}
        }
      }
    })
    .on('froalaEditor.image.beforeUpload', function(e, editor, images) {
      console.log(e + "," + editor + "," + angular.toJson(images))
    })
    .on('froalaEditor.image.uploaded', function(e, editor, response) {
      console.log(e + "," + editor + "," + response)
    })
});
