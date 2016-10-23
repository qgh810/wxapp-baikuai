import util from '../../utils/util'
Page({
    data: {
        GAMETIME: 60,
        time: 0,
        mark: 0,
        gaming: false,
        rows: [],
        modal: {
            hidden: true
        },
        lastTouchIndex: -1
    },
    onLoad: function () {
        console.log('进入游戏页面')
        this.initData()
    },

    /**
     * 初始化数据
     */
    initData () {
        // 初始化方格数据
        var rows = []
        for (let i = 0; i < 4; i++) {
            var row = {
                blackIndex: util.random(1, 3, true)
            }
            rows.push(row)
        }

        // 初始化时间
        var time = this.data.GAMETIME

        this.setData({
            rows: rows,
            time: time
        })
    },

    next (event) {
        var rowIndex = event.currentTarget.dataset.rowIndex - 0
        var colIndex = event.currentTarget.dataset.colIndex - 0
        if (rowIndex !== this.data.rows.length - 1) {
            return
        }
        // 如果当前游戏还没有开始  则开始游戏
        if (!this.data.gaming) {
            this.startGame()
        }

        // 加一分
        var mark = this.data.mark + 1
        this.setData({
            mark: mark
        })

        this.setData({
            lastTouchIndex: colIndex
        })

        var rows = this.data.rows
        let newRow = {
            blackIndex: util.random(1, 3, true)
        }
        rows.unshift(newRow)
        rows.pop()

        this.setData({
            rows: rows
        })
        // console.log(event)
    },

    // 开始游戏
    startGame () {
        this.setData({
            gaming: true
        })
        this.tId = setInterval(() => {
            console.log(this.data.time)
            var time = this.data.time - 1
            this.setData({
                time: time
            })
            if (this.data.time === 0) {
            this.gameOver()
            }
        }, 1000)
    },

    over (event) {
        // var rowIndex = event.currentTarget.dataset.rowIndex - 0
        // var colIndex = event.currentTarget.dataset.colIndex - 0
        this.gameOver()
    },

    /**
     * 结束游戏
     */
    gameOver () {
        this.setData({
            gaming: false
        })
        clearInterval(this.tId)
        this.onShowModal()
    },

    reStartGame () {
        this.setData({
            'modal.hidden': true
        })
        this.initData()
    },

    leaveGame () {
        wx.navigateBack()
    },

    onShowModal () {
        this.setData({
            'modal.hidden': false
        })
    }
 })