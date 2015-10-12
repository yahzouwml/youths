app.controller('addEditCtrl', ['$rootScope', '$scope', 'apiServices', function($rootScope, $scope, apiServices) {
    var args = []
    apiServices.tagFind({
        where: {
            type: 'blog'
        }
    }).then(function(response) {
        console.log(response)
        $('#input-tags').selectize({
            persist: false,
            createOnBlur: true,
            create: false,
            maxItems: 3,
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            options: response,
            sortField: {
                field: 'name',
                direction: 'asc'
            }
        });
    }, function(err) {
        console.log(err)
    })

    $scope.addBlog = function() {
        apiServices.blogCreate({
            title: $scope.blog.title,
            userId: $rootScope.currentUser.id,
            content: angular.element('#edit').froalaEditor('html.get', true),
            click: 0
        }).then(
            function(response) {
                console.log(response)
                args = $scope.selectTag.split(',')
                var tagRelations = new Array()
                for (i = 0; i < args.length; i++) {
                    tagRelations.push({
                        tagId: args[i],
                        otherId: response.id,
                        type: 'blog'
                    })
                }
                apiServices.tagreleationCreateMany(tagRelations).then(function(response) {
                    console.log(response)
                    $scope.blog = {}
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

    angular.element('#edit').froalaEditor({
            inlineMode: false,
            language: 'zh_cn',
            height: 500,
            codeBeautifier: true,
            imageUploadMethod: 'POST',
            // imageUploadURL: $rootScope.apiServer + '/containers/blog/upload',
            // imageUploadParams: {
            //     file_name: 'u=' + $rootScope.currentUser.id + "&d=" + (new Date()).toLocaleString() + ".jpg"
            // },
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
}]);
