<template>
    <div class="agent_notice">
        <div class="container">
            <h1 class="agent_txtitle">代理须知</h1>
            <h2>高收入，零投入！亞冠娛樂代理计划隆重推出。</h2>
            <h2>【共赢】始终是我们亞冠娛樂的经营理念，伴随亞冠娛樂的成长，玩家已经看到了亞冠娛樂的实力！现在加盟到亞冠娛樂来，让我们共同成长，共同受益。</h2>
            <h2>只需要简单的一步注册，就可以让你每月轻松获得高额回报。</h2>
            <h3>佣金计算</h3>
            <table class="agent_info_tablist">
                <thead>
                <tr>
                    <th>合作伙伴等级</th>
                    <th>活跃会员数</th>
                    <th>公司当月净盈利</th>
                    <th>佣金比例</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1级</td>
                        <td>≥3</td>
                        <td>1~500000</td>
                        <td>30%</td>
                    </tr>
                    <tr>
                        <td>2级</td>
                        <td>≥5</td>
                        <td>500001~2000000</td>
                        <td>40%</td>
                    </tr>
                    <tr>
                        <td>3级</td>
                        <td>≥5</td>
                        <td>2000001以上</td>
                        <td>50%</td>
                    </tr>
                </tbody>
            </table>
            <h2>计算公式</h2>
            <p>公司净盈利=下线会员存款-取款-账号余额-手续费3%</p>
            <p>代理佣金=公司净盈利×佣金比例</p>
            <p>每月最低活跃会员与公司净盈利需要同时达到要求方可按对应佣金比例计算佣金。</p>
            <p>例如：3月份某代理下线有5个活跃会员，为公司带来100万的净盈利，那么代理佣金就等于100万×40%=40万。</p>
            <h2 class="mt_20">活跃会员</h2>
            <p>活跃会员的定义：佣金结算周期内累计存款500元以上且当月有效投注额500元以上。</p>
            <h2>佣金提取条件</h2>
            <p>1、亚冠娱乐合作伙伴必须每月达到最少3个活跃会员，相同IP投注只算一个活跃会员；</p>
            <p>2、亚冠娱乐合作伙伴佣金提取最少¥500元，当佣金数少于¥500元时，将累积到下月一同发放；</p>
            <p>3、亚冠娱乐合作伙伴管理平台内给出的活跃会员个数是以投注为基数，仅供参考，具体达到要求的活跃会员的个数需要通过审核部门审核。</p>
            <p>4、若亚冠娱乐合作伙伴本月佣金出现负值，将会在下个月继续累计，直至达到正数并高于¥500元结算。</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.mt_20{
    margin-top: 20px;
}
.agent_notice{
    background: url(../../images/agent_noticebg.jpg) no-repeat center center;
    min-height: 1080px;
    .container {
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
    }
    .agent_txtitle{
        font-size: 68px;
        color: #ffffff;
        margin-top: 20px;
        height: 80px;
        line-height: 74px;
    }
    h2{
        font-size: 20px;
        color: #ffffff;
        line-height: 38px;
    }
    h3{
        font-size: 24px;
        color: #ffffff;
        text-align: center;
        line-height: 38px;
    }
    p{
        font-size: 20px;
        color: #ffffff;
        line-height: 36px;
        padding-left: 20px;
    }
    .agent_info_tablist{
        width: 100%;
        border: 2px solid #FFFFFF;
        text-align: center;
        margin-bottom: 30px;
        thead{
            tr{
                height: 58px;
                line-height: 58px;
                background: #E0E0E0;
                font-size: 24px;
                color: #272727;
            }
            th{
                font-weight: normal;
            }
        }
        tbody{
            tr{
                height: 58px;
                line-height: 58px;
                font-size: 24px;
                color: #ffffff;
                border: 2px solid #FFFFFF;
            }
        }
    }
}
</style>
