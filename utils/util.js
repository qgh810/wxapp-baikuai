function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 生成随机数
 */
function random (min, max, isInt) {
  if (!min) return Math.random()
  var result = false
  result = min + Math.random() * (max - min + 1)
  if (isInt) {
    result = parseInt(result)
  }
  return result
}

module.exports = {
  formatTime: formatTime,
  random: random
}
