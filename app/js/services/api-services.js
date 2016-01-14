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

  this.zhihuuserCount = function(options) {
    return Zhihuuser.count(options).$promise
  }

  //model blog operation
  this.blogCreate = function(options) {
    return Blog.create(options).$promise
  }

  this.blogUpdateById = function(options1, options2) {
    return Blog.prototype$updateAttributes(options1, options2).$promise
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

  //model tagreleation operation
  this.tagreleationCreateMany = function(options) {
    return TagRelation.createMany(options).$promise
  }

  this.tagreleationDestoryAll = function(options) {
    return Blog.tagRelations.destroyAll()({
      where: {
        or: options
      }
    }).$promise
  }


  //model user operation
  this.login = function(email, password) {
    return User
      .login({
        email: email,
        password: password
      })
      .$promise
  }

  this.logout = function() {
    return User
      .logout()
      .$promise
  }

  this.register = function(email, password, username) {
    return User
      .create({
        email: email,
        password: password,
        username: username
      })
      .$promise;
  }

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
