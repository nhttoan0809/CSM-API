module.exports = (datetime) =>
    `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}-${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()}`
