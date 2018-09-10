var express = require('express')
var superagent = require('superagent')

var app = express()

// var cheerio = require('cheerio');
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.get('/', function (req, res, next) {
  superagent.get('https://m.weibo.cn/api/container/getIndex?containerid=2303190002_445_1263905037_WEIBO_ARTICLE_LIST_DETAIL')
    .end(function (err, sres) {
      if (err) {
        return next(err)
      }
      let jsonData = JSON.parse(sres.text)
      let items = []
      jsonData.data.cards.forEach(function (j) {
        let counter = j.card_group.length > 10 ? 10 : j.card_group.length
        for (let i = 0; i < counter; i++) {
          let articleSummary = j.card_group[i]
          // console.log(Object.keys(articleSummary))
          if (articleSummary.card_type === 9) {
            items.push({
              title: articleSummary.mblog.page_info.content1,
              href: articleSummary.mblog.page_info.page_url,
              img: articleSummary.mblog.page_info.page_pic.url
            })
          } else {
            items.push({
              title: articleSummary.title_sub,
              href: articleSummary.scheme,
              img: articleSummary.pic
            })
          }
        }
      })
      res.send(items)
    })
})

app.listen(3000, function () {
  console.log('app is listening at port 3000')
})
