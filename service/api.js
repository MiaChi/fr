var express = require('express');
var superagent = require('superagent');

var app = express();

//var cheerio = require('cheerio');
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.get('/', function (req, res, next) {
	superagent.get('https://m.weibo.cn/api/container/getIndex?containerid=2303190002_445_1263905037_WEIBO_ARTICLE_LIST_DETAIL')
		.end(function (err, sres) {
			if (err) {
				return next(err);
			}
			let d = JSON.parse(sres.text)
				let items = []
				d.data.cards.forEach(function(j){
					j.card_group.forEach(function(i){
						console.log(Object.keys(i))
							if(i.card_type == '9'){
								items.push({
									title: i.mblog.page_info.content1,
									href: i.mblog.page_info.page_url,
									img: i.mblog.page_info.page_pic.url	
								})
								console.log(i.mblog.page_info.content1)
							}else{
								items.push({
									title: i.title_sub,
									href: i.schema,
									img: i.pic
								})
								console.log(i.title_sub)
							}
					})
				})
			res.send(items);
		});
});

app.listen(3000, function () {
	console.log('app is listening at port 3000');
});
