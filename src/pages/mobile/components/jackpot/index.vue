<template>
  <div class="jackpot"><span v-for="item in total">{{item}}</span></div>
</template>
<script>
  export default {
    data() {
      return {
        total: 0,
        tickerStartTime: (new Date()).getTime(),
        startNum: 0,
        step:0.1,
        interval:null
      };
    },
    beforeDestroy() {
      window.clearInterval(this.interval)
    },
    methods: {
      randomMoney() {
        let _this=this;
        let x = _this.startNum*1+( (((new Date()).getTime() - _this.tickerStartTime)/5009)*_this.step);
        _this.total=x.toString().$toFixed().strSplit();
      },
      Start(){
        let _this=this;
        _this.interval=setInterval(() => {
          _this.randomMoney();
        },59)
      }
    },
    created() {
      if (!window.xmlstring||!window.xmlstring.jpxml) {
        let _this = this;
        window.xmlstring = {}
        let _script = document.createElement('script');
        _script.src = '//tickers.playtech.com/jpdata/datalink/playtech.xml.js';
        _script.onload = function () {
          let xmldoc = {};
          if (typeof(DOMParser) != "undefined") {
            var parser = new DOMParser();
            xmldoc = parser.parseFromString(xmlstring.jpxml, "text/xml");
          } else {
            try {
              xmldoc = new ActiveXObject("Microsoft.XMLDOM");
              xmldoc.async = false;
              xmldoc.loadXML(xmlstring.jpxml);
            } catch (e) {
            }
          }
          var a = xmldoc.querySelector('amount[currency="cny"]');
          xmlstring.jpxml='1';
          _this.startNum =xmlstring.startNum= Number(a.firstChild.nodeValue);
          _this.step =xmlstring.step=Number(a.getAttribute("step"));
          _this.Start();
        }
        document.body.appendChild(_script)
      }else{
        this.startNum =window.xmlstring.startNum||552568331.52;
        this.step =window.xmlstring.step||40.10874;
        this.Start();
      }
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .jackpot {
    height: r(110);
    background: url("./bg.jpg") top/100% r(110) no-repeat;
    padding: r(20) r(34) r(28) 26%;
    @include f(65px);
    overflow: hidden;
    text-align: center;
    letter-spacing: r(2);
    vertical-align: top;
    color: #ff0;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
