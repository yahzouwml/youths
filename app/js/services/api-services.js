app.service('apiServices', function($q, $http, Nav, Tag, Zhihu, Zhihuuser, Blog, TagRelation, User, Comment, Reply) {

  //model nav operation
  this.navCreate = function(options) {
    return Nav.create(options).$promise
  }

  this.navFind = function(options) {
    return Nav.find({
      filter: options
    }).$promise
  }

  //model tag operation
  this.tagFind = function(options) {
    return Tag.find({
      filter: options
    }).$promise
  }

  this.tagFindBlogs = function(options) {
    return Tag.blogs(options).$promise
  }

  this.tagFindNavs = function(options) {
    return Tag.navs(options).$promise
  }

  //model zhihu operation
  this.zhihuFind = function(options) {
    return Zhihu.find({
      filter: options
    }).$promise
  }

  //model zhihuuser operation
  this.zhihuuserFind = function(options) {
    return Zhihuuser.find({
      filter: options
    }).$promise
  }

  //model blog operation
  this.blogCreate = function(options) {
    return Blog.create(options).$promise
  }

  this.blogFind = function(options) {
    return Blog.find({
      filter: options
    }).$promise
  }

  this.blogFindById = function(options) {
    return Blog.findById(options).$promise
  }

  this.blogLike = function(options1, options2) {
    return Blog.blogLikes.create(options1, options2).$promise
  }

  this.blogDislike = function(options1, options2) {
    return Blog.blogLikes.destroyById(options1, options2).$promise
  }

  //model blog operation
  this.tagreleationCreateMany = function(options) {
    return TagRelation.createMany(options).$promise
  }

  //model user operation
  this.changePassword = function(options) {
    return User.changePassword(options).$promise
  }

  this.userConfirm = function(options) {
    return User.confirm(options).$promise
  }

  this.userFocus = function(options) {
    return User.focusUsers.create(options).$promise
  }

  this.userDisfocus = function(options) {
    return User.focusUsers.destroyById(options).$promise
  }

  //model comment operation
  this.commentCreate = function(options) {
    return Comment.create(options).$promise
  }

  //model reply operation
  this.replyCreate = function(options) {
    return Reply.create(options).$promise
  }
})
