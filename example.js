
require('colors')
var gdiff = require('./giff')

var gd = new gdiff();
var one = "<h3>小组目标</h3><ol><li>改善用户从网站</li><li>帮助用户对项目有更好的认识 上手更容易</li><li>帮助深度用户对更多的并行项目有更好的控制</li></ol><h3>小组涉及到的产品线</h3><ol><li>Project iOS客户端（邵菁主要负责）</li><li>Project Android客户端（唐娟负责）</li><li>Project 网页客户端（樊伟负责）</li></ol><h3>小组工作安排</h3><ul><li>第一阶段：官网调整，iOS导航条板, Android导航侧栏版</li></ul>第一阶段内测：2014.2.26<br>第一阶段发布：2014.3.5<br><ul><li>第二阶段：网页客户端布局调整</li></ul>第二阶段内测: &nbsp;2014.3.12<br>第二阶段发布: &nbsp;2014.3.19<br><h3>小组成员</h3>齐俊元 姜翔 邵菁 樊伟 唐娟<br><br><h3>第二次组会的一些要点</h3>1 准备首页案例介绍的文案（俊元）<br>2 冻结iOS设计（邵菁）<br>3 优化「所有项目」的设计：星标操作，进入组织首页操作（樊伟&amp;唐娟）<br>4 安卓侧栏导航加入「所有项目」项（唐娟）<br>5 新首页设计精简视觉风格，突出内容（邵菁）<br><br><h3>第三次组会的一些要点</h3>1 周一（3.3）GA发布新版本首页，需要精简功能页，并优化网络请求，周三将移动页面发布到正式版，周五将桌面版发布到正式版(姜翔，俊元)<br>2 改版portal，优化设计，希望周一冻结设计，周三GA，周五发布（唐娟，邵菁，俊元，姜翔）<br>3 启动第二期，调整布局，优化做侧栏等，希望能先有一个改善目标，然后有针对性的改进（樊伟）<br><br><h3>第四次组会的一些要点</h3>1 周三发布正式版移动页面，并GA新版桌面首页（姜翔）<br>2 案例内容需要完善（俊元）<br>3 iPhone版项目入口修改，需要完善新的页面，希望周三能Freeze（邵菁）<br>主要有：inbox、wall、detail、app page这四个页面设计。<br>4.功能页面精简优化，周三Freeze（邵菁）<br>4 新版项目首页针对cover进行优化，加上archive功能，周三GA（唐娟，俊元）<br><br> <h3>第五次组会的一些要点</h3> <p>启动第二阶段网页调整：</p> <p>1.导航条的修改:项目、我、收件箱并排归入顶条。hover项目出现常用项目,右侧是添加和头像。</p> <p>2.app工具条的横向布局。右侧为add member和chart，这个布局有待设计和商榷。</p> <p>3.chart和右栏成员融合。（改版过渡期）</p> <p>4.任务板里任务分组默认展出来，可收起。</p> <p>5.inbox的样式调整（参考iOS的设计）。</p> <p>增加unread和all的tab，考虑和原有标记全部已读和清空已读的设计。</p><p><br></p><h3>第六次组会的要点&nbsp;</h3><p>交互需要修改的部分： 群聊和成员的交互、收件箱的工具条、我和设置的联系、添加成员的位置、我里面加入我的组织部分（樊伟）<br></p><h3>网页端改版分三期过渡:&nbsp;&nbsp;</h3><ul><li>第一期 一级导航条修改，我的、收件箱 、设置。工程师根据交互调整现有元素。（下周三12日上GA，下下周一17日上正式）&nbsp;</li></ul><ul><li>第二期 二级导航设计，群聊 成员的设计 &nbsp;（19日上GA，24日上线）&nbsp;</li></ul><ul><li>第三期 每个apps的布局调整，设定页面宽度。 （ 26日上GA，31日上线）</li></ul>此次改版的目标：提高可用性，增加我的维度，提升网页和iOS逻辑和视觉的统一性，增强teambition品牌感。<br>";
var other = "<h3>小组目标</h3><ol><li>改善用户从网站、手机以及微信中了解产品的过程</li><li>帮助用户对项目有更好的认识 上手更容易</li><li>帮助深度用户对更多的并行项目有更好的控制</li></ol><h3>小组涉及到的产品线</h3><ol><li>Project iOS客户端（邵菁主要负责）</li><li>Project Android客户端（唐娟负责）</li><li>Project 网页客户端（樊伟负责）</li></ol><h3>小组工作安排</h3><ul><li>第一阶段：官网调整，iOS导航条板, Android导航侧栏版</li></ul>第一阶段内测：2014.2.26<br>第一阶段发布：2014.3.5<br><ul><li>第二阶段：网页客户端布局调整</li></ul>第二阶段内测: &nbsp;2014.3.12<br>第二阶段发布: &nbsp;2014.3.19<br><h3>小组成员</h3>齐俊元 姜翔 邵菁 樊伟 唐娟<br><br><h3>第二次组会的一些要点</h3>1 准备首页案例介绍的文案（俊元）<br>2 冻结iOS设计（邵菁）<br>3 优化「所有项目」的设计：星标操作，进入组织首页操作（樊伟&amp;唐娟）<br>4 安卓侧栏导航加入「所有项目」项（唐娟）<br>5 新首页设计精简视觉风格，突出内容（邵菁）<br><br><h3>第三次组会的一些要点</h3>1 周一（3.3）GA发布新版本首页，需要精简功能页，并优化网络请求，周三将移动页面发布到正式版，周五将桌面版发布到正式版(姜翔，俊元)<br>2 改版portal，优化设计，希望周一冻结设计，周三GA，周五发布（唐娟，邵菁，俊元，姜翔）<br>3 启动第二期，调整布局，优化做侧栏等，希望能先有一个改善目标，然后有针对性的改进（樊伟）<br><br><h3>第四次组会的一些要点</h3>1 周三发布正式版移动页面，并GA新版桌面首页（姜翔）<br>2 案例内容需要完善（俊元）<br>3 iPhone版项目入口修改，需要完善新的页面，希望周三能Freeze（邵菁）<br>4 新版项目首页针对cover进行优化，加上archive功能，周三GA（唐娟，俊元）<br><br>";

var diff = gd.diff_main(other, one);
var isPrint = false;

if(process.env.MODE == 1){
  diff.forEach(function(part){
    // green for additions, red for deletions
    // grey for common parts
    var color = part[0] == 1 ? 'green' :
      part[0] == -1 ? 'red' : 'grey';
    process.stderr.write(part[1][color]);
  });
}

if(process.env.MODE == 2){
  diff.forEach(function(part){
    // green for additions, red for deletions
    // grey for common parts
    var color = part[0] == 1 ? 'green' :
      part[0] == -1 ? 'red' : 'grey';
    if(part[0] != 0){ isPrint = true; }

    if(isPrint){
      process.stderr.write(part[1][color]);
    }
  });
}
console.log();
