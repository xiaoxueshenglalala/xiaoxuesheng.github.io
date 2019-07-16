/ *！
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 *
 *获得许可的麻省理工学院©Zeno Rocha
 * /
（function webpackUniversalModuleDefinition（root，factory）{
	if（typeof exports ==='object'&& typeof module ==='object'）
		module.exports = factory（）;
	else if（typeof define ==='function'&& define.amd）
		define（[]，factory）;
	否则if（typeof exports ==='object'）
		exports [“ClipboardJS”] = factory（）;
	其他
		root [“ClipboardJS”] = factory（）;
}）（this，function（）{
return / ****** /（function（modules）{// webpackBootstrap
/ ****** / //模块缓存
/ ****** / var installedModules = {};
/ ****** /
/ ****** / // require函数
/ ****** / function __webpack_require __（moduleId）{
/ ****** /
/ ****** / //检查模块是否在缓存中
/ ****** / if（installedModules [moduleId]）{
/ ****** / return installedModules [moduleId] .exports;
/ ****** /}
/ ****** / //创建一个新模块（并将其放入缓存）
/ ****** / var module = installedModules [moduleId] = {
/ ****** / i：moduleId，
/ ****** / l：false，
/ ****** / exports：{}
/ ****** /};
/ ****** /
/ ****** / //执行模块功能
/ ****** / modules [moduleId] .call（module.exports，module，module.exports，__ webpack_require__）;
/ ****** /
/ ****** / //将模块标记为已加载
/ ****** / module.l = true;
/ ****** /
/ ****** / //返回模块的导出
/ ****** / return module.exports;
/ ****** /}
/ ****** /
/ ****** /
/ ****** / //公开模块对象（__webpack_modules__）
/ ****** / __webpack_require __。m = modules;
/ ****** /
/ ****** / //公开模块缓存
/ ****** / __webpack_require __。c = installedModules;
/ ****** /
/ ****** / //为和谐输出定义getter函数
/ ****** / __webpack_require __。d = function（exports，name，getter）{
/ ****** / if（！__ webpack_require __。o（exports，name））{
/ ****** / Object.defineProperty（exports，name，{enumerable：true，get：getter}）;
/ ****** /}
/ ****** /};
/ ****** /
/ ****** / //在导出时定义__esModule
/ ****** / __webpack_require __。r = function（exports）{
/ ****** / if（typeof Symbol！=='undefined'&& Symbol.toStringTag）{
/ ****** / Object.defineProperty（exports，Symbol.toStringTag，{value：'Module'}）;
/ ****** /}
/ ****** / Object.defineProperty（exports，'__ myModule'，{value：true}）;
/ ****** /};
/ ****** /
/ ****** / //创建一个假的命名空间对象
/ ****** / // mode＆1：value是模块ID，需要它
/ ****** / // mode＆2：将值的所有属性合并到ns中
/ ****** / // mode＆4：已经ns对象时返回值
/ ****** / // mode＆8 | 1：表现得像需要
/ ****** / __webpack_require __。t = function（value，mode）{
/ ****** / if（mode＆1）value = __webpack_require __（value）;
/ ****** / if（mode＆8）返回值;
/ ****** / if（（mode＆4）&& typeof value ==='object'&& value && value .__ esModule）返回值;
/ ****** / var ns = Object.create（null）;
/ ****** / __webpack_require __。r（ns）;
/ ****** / Object.defineProperty（ns，'default'，{enumerable：true，value：value}）;
/ ****** / if（mode＆2 && typeof value！='string'）for（var key in value）__ webpack_require __。d（ns，key，function（key）{return value [key];}。 bind（null，key））;
/ ****** / return ns;
/ ****** /};
/ ****** /
/ ****** / // getDefaultExport函数，用于与非和谐模块兼容
/ ****** / __webpack_require __。n = function（module）{
/ ****** / var getter = module && module .__ esModule？
/ ****** / function getDefault（）{return module ['default']; }：
/ ****** / function getModuleExports（）{return module; };
/ ****** / __webpack_require __。d（getter，'a'，getter）;
/ ****** / return getter;
/ ****** /};
/ ****** /
/ ****** / // Object.prototype.hasOwnProperty.call
/ ****** / __webpack_require __。o = function（object，property）{return Object.prototype.hasOwnProperty.call（object，property）; };
/ ****** /
/ ****** / // __webpack_public_path__
/ ****** / __webpack_require __。p =“”;
/ ****** /
/ ****** /
/ ****** / //加载输入模块并返回导出
/ ****** / return __webpack_require __（__ webpack_require __。s = 0）;
/ ****** /}）
/ ******************* *********************** /
/ ****** /（[
/ * 0 * /
/ *** /（function（module，exports，__ webpack_require__）{

“严格使用”;


var _typeof = typeof符号===“function”&& typeof Symbol.iterator ===“symbol”？function（obj）{return typeof obj; }：function（obj）{return obj && typeof Symbol ===“function”&& obj.constructor === Symbol && obj！== Symbol.prototype？“符号”：typeof obj; };

var _createClass = function（）{function defineProperties（target，props）{for（var i = 0; i <props.length; i ++）{var descriptor = props [i]; descriptor.enumerable = descriptor.enumerable || 假; descriptor.configurable = true; if（描述符中的“value”）descriptor.writable = true; Object.defineProperty（target，descriptor.key，descriptor）; return function（Constructor，protoProps，staticProps）{if（protoProps）defineProperties（Constructor.prototype，protoProps）; if（staticProps）defineProperties（Constructor，staticProps）; return构造函数; }; }（）;

var _clipboardAction = __webpack_require __（1）;

var _clipboardAction2 = _interopRequireDefault（_clipboardAction）;

var _tinyEmitter = __webpack_require __（3）;

var _tinyEmitter2 = _interopRequireDefault（_tinyEmitter）;

var _goodListener = __webpack_require __（4）;

var _goodListener2 = _interopRequireDefault（_goodListener）;

function _interopRequireDefault（obj）{return obj && obj .__ esModule？obj：{default：obj}; }

function _classCallCheck（instance，Constructor）{if（！（instance instanceof Constructor））{throw new TypeError（“不能将类称为函数”）; }}

function _possibleConstructorReturn（self，call）{if（！self）{throw new ReferenceError（“this尚未初始化 -  super（）尚未被调用”）; } return call &&（typeof call ===“object”|| typeof call ===“function”）？呼叫：自我; }

function _inherits（subClass，superClass）{if（typeof superClass！==“function”&& superClass！== null）{throw new TypeError（“Super expression必须为null或函数，而不是”+ typeof superClass）; } subClass.prototype = Object.create（superClass && superClass.prototype，{constructor：{value：subClass，enumerable：false，writable：true，configurable：true}}）; if（superClass）Object.setPrototypeOf？Object.setPrototypeOf（subClass，superClass）：subClass .__ proto__ = superClass; }

/ **
 *带有一个或多个元素的基类，向它们添加事件监听器，
 *并在每次点击时实例化一个新的`ClipboardAction`。
 * /
var Clipboard = function（_Emitter）{
    _inherits（剪贴板，_Emitter）;

    / **
     * @param {String | HTMLElement | HTMLCollection | NodeList}触发器
     * @param {Object}选项
     * /
    function Clipboard（触发器，选项）{
        _classCallCheck（this，Clipboard）;

        var _this = _possibleConstructorReturn（this，（Clipboard .__ proto__ || Object.getPrototypeOf（Clipboard））。call（this））;

        _this.resolveOptions（选项）;
        _this.listenClick（触发）;
        return _this;
    }

    / **
     *定义是否使用内部setter函数解析属性
     *或在构造函数中传递的自定义函数。
     * @param {Object}选项
     * /


    _createClass（Clipboard，[{
        key：'resolveOptions'，
        value：function resolveOptions（）{
            var options = arguments.length> 0 && arguments [0]！== undefined？arguments [0]：{};

            this.action = typeof options.action ==='function'？options.action：this.defaultAction;
            this.target = typeof options.target ==='function'？options.target：this.defaultTarget;
            this.text = typeof options.text ==='function'？options.text：this.defaultText;
            this.container = _typeof（options.container）==='object'？options.container：document.body;
        }

        / **
         *向传递的触发器添加单击事件侦听器。
         * @param {String | HTMLElement | HTMLCollection | NodeList}触发器
         * /

    }，{
        关键：'listenClick'，
        value：function listenClick（trigger）{
            var _this2 = this;

            this.listener =（0，_goodListener2.default）（触发器，'click'，function（e）{
                return _this2.onClick（e）;
            }）;
        }

        / **
         *在每次点击事件中定义一个新的`ClipboardAction`。
         * @param {Event} e
         * /

    }，{
        关键：'onClick'，
        value：function onClick（e）{
            var trigger = e.delegateTarget || e.currentTarget;

            if（this.clipboardAction）{
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default（{
                action：this.action（触发器），
                target：this.target（触发器），
                text：this.text（触发器），
                容器：this.container，
                触发器：触发器，
                发射器：这个
            }）;
        }

        / **
         *默认`action`查找功能。
         * @param {Element}触发器
         * /

    }，{
        key：'defaultAction'，
        value：function defaultAction（trigger）{
            return getAttributeValue（'action'，trigger）;
        }

        / **
         *默认`target`查找功能。
         * @param {Element}触发器
         * /

    }，{
        key：'defaultTarget'，
        value：function defaultTarget（trigger）{
            var selector = getAttributeValue（'target'，trigger）;

            if（selector）{
                return document.querySelector（selector）;
            }
        }

        / **
         *返回给定操作的支持，如果没有操作则返回所有操作
         *给出。
         * @param {String} [行动]
         * /

    }，{
        key：'defaultText'，


        / **
         *默认`text`查找功能。
         * @param {Element}触发器
         * /
        value：function defaultText（trigger）{
            return getAttributeValue（'text'，trigger）;
        }

        / **
         *破坏生命周期。
         * /

    }，{
        关键：'破坏'，
        value：function destroy（）{
            this.listener.destroy（）;

            if（this.clipboardAction）{
                this.clipboardAction.destroy（）;
                this.clipboardAction = null;
            }
        }
    }]，[{
        key：'isSupported'，
        value：function isSupported（）{
            var action = arguments.length> 0 && arguments [0]！== undefined？arguments [0]：['copy'，'cut'];

            var actions = typeof action ==='string'？[行动]：行动;
            var support = !! document.queryCommandSupported;

            actions.forEach（function（action）{
                support = support && !! document.queryCommandSupported（action）;
            }）;

            返回支持;
        }
    }]）;

    返回剪贴板;
}（_ tinyEmitter2.default）;

/ **
 *帮助函数来检索属性值。
 * @param {String}后缀
 * @param {Element}元素
 * /


function getAttributeValue（suffix，element）{
    var attribute ='data-clipboard-'+后缀;

    if（！element.hasAttribute（attribute））{
        返回;
    }

    return element.getAttribute（attribute）;
}

module.exports =剪贴板;

/ *** /}），
/ * 1 * /
/ *** /（function（module，exports，__ webpack_require__）{

“严格使用”;


var _typeof = typeof符号===“function”&& typeof Symbol.iterator ===“symbol”？function（obj）{return typeof obj; }：function（obj）{return obj && typeof Symbol ===“function”&& obj.constructor === Symbol && obj！== Symbol.prototype？“符号”：typeof obj; };

var _createClass = function（）{function defineProperties（target，props）{for（var i = 0; i <props.length; i ++）{var descriptor = props [i]; descriptor.enumerable = descriptor.enumerable || 假; descriptor.configurable = true; if（描述符中的“value”）descriptor.writable = true; Object.defineProperty（target，descriptor.key，descriptor）; return function（Constructor，protoProps，staticProps）{if（protoProps）defineProperties（Constructor.prototype，protoProps）; if（staticProps）defineProperties（Constructor，staticProps）; return构造函数; }; }（）;

var _select = __webpack_require __（2）;

var _select2 = _interopRequireDefault（_select）;

function _interopRequireDefault（obj）{return obj && obj .__ esModule？obj：{default：obj}; }

function _classCallCheck（instance，Constructor）{if（！（instance instanceof Constructor））{throw new TypeError（“不能将类称为函数”）; }}

/ **
 *从“text”或“target”执行选择的内部类
 *属性然后执行复制或剪切操作。
 * /
var ClipboardAction = function（）{
    / **
     * @param {Object}选项
     * /
    function ClipboardAction（options）{
        _classCallCheck（this，ClipboardAction）;

        this.resolveOptions（选项）;
        this.initSelection（）;
    }

    / **
     *定义从构造函数传递的基本属性。
     * @param {Object}选项
     * /


    _createClass（ClipboardAction，[{
        key：'resolveOptions'，
        value：function resolveOptions（）{
            var options = arguments.length> 0 && arguments [0]！== undefined？arguments [0]：{};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText ='';
        }

        / **
         *决定基于哪种选择策略
         *关于`text`和`target`属性的存在。
         * /

    }，{
        key：'initSelection'，
        value：function initSelection（）{
            if（this.text）{
                this.selectFake（）;
            } else if（this.target）{
                this.selectTarget（）;
            }
        }

        / **
         *创建一个假的textarea元素，从`text`属性设置其值，
         *并对其进行选择。
         * /

    }，{
        key：'selectFake'，
        value：function selectFake（）{
            var _this = this;

            var isRTL = document.documentElement.getAttribute（'dir'）=='rtl';

            this.removeFake（）;

            this.fakeHandlerCallback = function（）{
                return _this.removeFake（）;
            };
            this.fakeHandler = this.container.addEventListener（'click'，this.fakeHandlerCallback）|| 真正;

            this.fakeElem = document.createElement（'textarea'）;
            //防止iOS上的缩放
            this.fakeElem.style.fontSize ='12pt';
            //重置框模型
            this.fakeElem.style.border ='0';
            this.fakeElem.style.padding ='0';
            this.fakeElem.style.margin ='0';
            //将元素水平移出屏幕
            this.fakeElem.style.position ='绝对';
            this.fakeElem.style [isRTL？'right'：'left'] =' -  9999px';
            //将元素垂直移动到相同位置
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition +'px';

            this.fakeElem.setAttribute（'readonly'，''）;
            this.fakeElem.value = this.text;

            this.container.appendChild（this.fakeElem）;

            this.selectedText =（0，_select2.default）（this.fakeElem）;
            this.copyText（）;
        }

        / **
         *只有在另一次点击事件后才会删除假元素
         *用户可以按“Ctrl + C”进行复制，因为选择仍然存在。
         * /

    }，{
        key：'removeFake'，
        value：function removeFake（）{
            if（this.fakeHandler）{
                this.container.removeEventListener（'click'，this.fakeHandlerCallback）;
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if（this.fakeElem）{
                this.container.removeChild（this.fakeElem）;
                this.fakeElem = null;
            }
        }

        / **
         *从`target`属性传递的元素中选择内容。
         * /

    }，{
        key：'selectTarget'，
        value：function selectTarget（）{
            this.selectedText =（0，_select2.default）（this.target）;
            this.copyText（）;
        }

        / **
         *根据当前选择执行复制操作。
         * /

    }，{
        key：'copyText'，
        value：function copyText（）{
            var succeeded = void 0;

            尝试{
                succeeded = document.execCommand（this.action）;
            } catch（err）{
                成功=假;
            }

            this.handleResult（成功）;
        }

        / **
         *根据复制操作结果触发事件。
         * @param {Boolean}成功
         * /

    }，{
        key：'handleResult'，
        value：function handleResult（succeeded）{
            this.emitter.emit（成功？'成功'：'错误'，{
                行动：this.action，
                text：this.selectedText，
                触发器：this.trigger，
                clearSelection：this.clearSelection.bind（this）
            }）;
        }

        / **
         *将焦点从“目标”移开并返回触发器，移除当前选择。
         * /

    }，{
        key：'clearSelection'，
        value：function clearSelection（）{
            if（this.trigger）{
                this.trigger.focus（）;
            }

            window.getSelection（）removeAllRanges（）;
        }

        / **
         *设置要执行的“动作”，可以是“复制”或“剪切”。
         * @param {String}动作
         * /

    }，{
        关键：'破坏'，


        / **
         *破坏生命周期。
         * /
        value：function destroy（）{
            this.removeFake（）;
        }
    }，{
        关键：'行动'，
        set：function set（）{
            var action = arguments.length> 0 && arguments [0]！== undefined？arguments [0]：'copy';

            this._action = action;

            if（this._action！=='copy'&& this._action！=='cut'）{
                抛出新错误（'无效'动作“值，使用”复制“或”剪切“'）;
            }
        }

        / **
         *获取`action`属性。
         * @return {String}
         * /
        ，
        get：function get（）{
            return this._action;
        }

        / **
         *使用元素设置`target`属性
         *将复制其内容。
         * @param {Element}目标
         * /

    }，{
        关键：'目标'，
        set：function set（target）{
            if（target！== undefined）{
                if（target &&（typeof target ==='undefined'？'undefined'：_ typeof（target））==='object'&& target.nodeType === 1）{
                    if（this.action ==='copy'&& target.hasAttribute（'disabled'））{
                        抛出新错误（'无效'目标“属性。请使用”readonly“而不是”disabled“属性'）;
                    }

                    if（this.action ==='cut'&&（target.hasAttribute（'readonly'）|| target.hasAttribute（'disabled'）））{
                        抛出新的错误（'无效的'目标“属性。你不能从具有”只读“或”禁用“属性的元素中剪切文本'）;
                    }

                    this._target = target;
                } else {
                    抛出新错误（'无效'目标“值，使用有效元素'）;
                }
            }
        }

        / **
         *获取`target`属性。
         * @return {String | HTMLElement}
         * /
        ，
        get：function get（）{
            return this._target;
        }
    }]）;

    返回ClipboardAction;
}（）;

module.exports = ClipboardAction;

/ *** /}），
/ * 2 * /
/ *** /（function（module，exports）{

function select（element）{
    var selectedText;

    if（element.nodeName ==='SELECT'）{
        element.focus（）;

        selectedText = element.value;
    }
    else if（element.nodeName ==='INPUT'|| element.nodeName ==='TEXTAREA'）{
        var isReadOnly = element.hasAttribute（'readonly'）;

        if（！isReadOnly）{
            element.setAttribute（'readonly'，''）;
        }

        element.select（）;
        element.setSelectionRange（0，element.value.length）;

        if（！isReadOnly）{
            element.removeAttribute（ '只读'）;
        }

        selectedText = element.value;
    }
    其他{
        if（element.hasAttribute（'contenteditable'））{
            element.focus（）;
        }

        var selection = window.getSelection（）;
        var range = document.createRange（）;

        range.selectNodeContents（元件）;
        selection.removeAllRanges（）;
        selection.addRange（范围）;

        selectedText = selection.toString（）;
    }

    return selectedText;
}

module.exports = select;


/ *** /}），
/ * 3 * /
/ *** /（function（module，exports）{

函数E（）{
  //保持空，以便更容易继承
  //（来自https://github.com/lipsmack来自https://github.com/scottcorgan/tiny-emitter/issues/3）
}

E.prototype = {
  on：function（name，callback，ctx）{
    var e = this.e || （this.e = {}）;

    （e [name] ||（e [name] = []））。push（{
      fn：回调，
      ctx：ctx
    }）;

    归还这个;
  }，

  once：function（name，callback，ctx）{
    var self = this;
    function listener（）{
      self.off（姓名，听众）;
      callback.apply（ctx，arguments）;
    };

    listener._ =回调
    return this.on（name，listener，ctx）;
  }，

  emit：function（name）{
    var data = [] .slice.call（arguments，1）;
    var evtArr =（（this.e ||（this.e = {}））[name] || []）。slice（）;
    var i = 0;
    var len = evtArr.length;

    for（i; i <len; i ++）{
      evtArr [i] .fn.apply（evtArr [i] .ctx，data）;
    }

    归还这个;
  }，

  off：function（name，callback）{
    var e = this.e || （this.e = {}）;
    var evts = e [name];
    var liveEvents = [];

    if（evts && callback）{
      for（var i = 0，len = evts.length; i <len; i ++）{
        if（evts [i] .fn！== callback && evts [i] .fn._！== callback）
          liveEvents.push（的EVT [I]）;
      }
    }

    //从队列中删除事件以防止内存泄漏
    //由https://github.com/lazd建议
    //参考：https：//github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    （liveEvents.length）
      ？e [name] = liveEvents
      ：删除e [name];

    归还这个;
  }
};

module.exports = E;


/ *** /}），
/ * 4 * /
/ *** /（function（module，exports，__ webpack_require__）{

var is = __webpack_require __（5）;
var delegate = __webpack_require __（6）;

/ **
 *验证所有参数并调用右侧
 *基于其目标类型的侦听器功能。
 *
 * @param {String | HTMLElement | HTMLCollection | NodeList}目标
 * @param {String}类型
 * @param {Function}回调
 * @return {Object}
 * /
function listen（target，type，callback）{
    if（！target &&！type &&！callback）{
        抛出新错误（'缺少必需的参数'）;
    }

    if（！is.string（type））{
        抛出新的TypeError（'第二个参数必须是一个String'）;
    }

    if（！is.fn（callback））{
        抛出新的TypeError（'第三个参数必须是一个函数'）;
    }

    if（is.node（target））{
        return listenNode（target，type，callback）;
    }
    else if（is.nodeList（target））{
        return listenNodeList（target，type，callback）;
    }
    else if（is.string（target））{
        return listenSelector（target，type，callback）;
    }
    其他{
        抛出新的TypeError（'第一个参数必须是String，HTMLElement，HTMLCollection或NodeList'）;
    }
}

/ **
 *向HTML元素添加事件侦听器
 *并返回一个删除侦听器函数。
 *
 * @param {HTMLElement}节点
 * @param {String}类型
 * @param {Function}回调
 * @return {Object}
 * /
function listenNode（node，type，callback）{
    node.addEventListener（type，callback）;

    返回{
        destroy：function（）{
            node.removeEventListener（type，callback）;
        }
    }
}

/ **
 *将事件侦听器添加到HTML元素列表中
 *并返回一个删除侦听器函数。
 *
 * @param {NodeList | HTMLCollection} nodeList
 * @param {String}类型
 * @param {Function}回调
 * @return {Object}
 * /
function listenNodeList（nodeList，type，callback）{
    Array.prototype.forEach.call（nodeList，function（node）{
        node.addEventListener（type，callback）;
    }）;

    返回{
        destroy：function（）{
            Array.prototype.forEach.call（nodeList，function（node）{
                node.removeEventListener（type，callback）;
            }）;
        }
    }
}

/ **
 *向选择器添加事件侦听器
 *并返回一个删除侦听器函数。
 *
 * @param {String}选择器
 * @param {String}类型
 * @param {Function}回调
 * @return {Object}
 * /
function listenSelector（selector，type，callback）{
    return delegate（document.body，selector，type，callback）;
}

module.exports = listen;


/ *** /}），
/ * 5 * /
/ *** /（function（module，exports）{

/ **
 *检查参数是否是HTML元素。
 *
 * @param {Object}值
 * @return {Boolean}
 * /
exports.node = function（value）{
    返回值！== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/ **
 *检查参数是否是HTML元素列表。
 *
 * @param {Object}值
 * @return {Boolean}
 * /
exports.nodeList = function（value）{
    var type = Object.prototype.toString.call（value）;

    返回值！== undefined
        &&（type ==='[object NodeList]'|| type ==='[object HTMLCollection]'）
        &&（'长度'的值）
        &&（value.length === 0 || exports.node（value [0]））;
};

/ **
 *检查参数是否为字符串。
 *
 * @param {Object}值
 * @return {Boolean}
 * /
exports.string = function（value）{
    返回typeof值==='string'
        || value instanceof String;
};

/ **
 *检查参数是否是函数。
 *
 * @param {Object}值
 * @return {Boolean}
 * /
exports.fn = function（value）{
    var type = Object.prototype.toString.call（value）;

    return type ==='[object Function]';
};


/ *** /}），
/ * 6 * /
/ *** /（function（module，exports，__ webpack_require__）{

var nearest = __webpack_require __（7）;

/ **
 *将事件委托给选择器。
 *
 * @param {Element}元素
 * @param {String}选择器
 * @param {String}类型
 * @param {Function}回调
 * @param {Boolean} useCapture
 * @return {Object}
 * /
function _delegate（element，selector，type，callback，useCapture）{
    var listenerFn = listener.apply（this，arguments）;

    element.addEventListener（type，listenerFn，useCapture）;

    返回{
        destroy：function（）{
            element.removeEventListener（type，listenerFn，useCapture）;
        }
    }
}

/ **
 *将事件委托给选择器。
 *
 * @param {Element | String | Array} [elements]
 * @param {String}选择器
 * @param {String}类型
 * @param {Function}回调
 * @param {Boolean} useCapture
 * @return {Object}
 * /
function delegate（elements，selector，type，callback，useCapture）{
    //处理常规元素用法
    if（typeof elements.addEventListener ==='function'）{
        return _delegate.apply（null，arguments）;
    }

    //处理无元素使用，默认为全局委派
    if（typeof type ==='function'）{
        //使用`document`作为第一个参数，然后应用参数
        //这是.unshift`参数`的一种简短方法，而不会遇到去优化
        return _delegate.bind（null，document）.apply（null，arguments）;
    }

    //处理基于选择器的用法
    if（typeof elements ==='string'）{
        elements = document.querySelectorAll（elements）;
    }

    //处理基于数组的用法
    return Array.prototype.map.call（elements，function（element）{
        return _delegate（element，selector，type，callback，useCapture）;
    }）;
}

/ **
 *查找最接近的匹配并调用回调。
 *
 * @param {Element}元素
 * @param {String}选择器
 * @param {String}类型
 * @param {Function}回调
 * @return {功能}
 * /
函数侦听器（元素，选择器，类型，回调）{
    返回函数（e）{
        e.delegateTarget = nearest（e.target，selector）;

        if（e.delegateTarget）{
            callback.call（element，e）;
        }
    }
}

module.exports = delegate;


/ *** /}），
/ * 7 * /
/ *** /（function（module，exports）{

var DOCUMENT_NODE_TYPE = 9;

/ **
 * Element.matches（）的polyfill
 * /
if（typeof Element！=='undefined'&&！Element.prototype.matches）{
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/ **
 *查找与选择器匹配的最近父级。
 *
 * @param {Element}元素
 * @param {String}选择器
 * @return {功能}
 * /
函数最接近的（元素，选择器）{
    while（element && element.nodeType！== DOCUMENT_NODE_TYPE）{
        if（typeof element.matches ==='function'&&
            element.matches（selector））{
          返回元素;
        }
        element = element.parentNode;
    }
}

module.exports =最近;


/ *** /}）
/ ****** /]）;
}）;
