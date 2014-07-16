module.exports = session;

function session() {
  var sess = {};
  return function(ctx, next) {
    if (ctx.session) return next();

    ctx.session = sess;
    next();
  };
}
