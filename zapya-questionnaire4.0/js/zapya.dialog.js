/**
 * 说明
 * 样式引入base.css文件即可，具体样式见弹层部分
 */

;(function($, window, undefined) {
    
    var win = $(window),
        doc = $(document),
        count = 1

    var Dialog = function(options) {
        
        this.settings = $.extend({}, Dialog.defaults, options);
        
        this.init();
        
    }
    /**
     * 默认配置
        type 3:普通提示类（牙豆）/ 1:话费 / 2:实物 （默认为普通提示）/ 4:确认框
        cancelFunc 取消按钮事件(默认事件关闭弹出层）
        confirmFunc 确认按钮事件
        titleClass : 添加class类，修改title样式
        textClass : 添加class类，修改text样式
     */
    Dialog.defaults = {      
        title : "",
        text : "",
        titleClass : "",
        textClass : "",
        type : 3, 
        cancelText : '取消', 
        confirmText : '确认',
        cancelFunc : function(){
            Dialog.prototype.close();
        },
        confirmFunc : function(){
            Dialog.prototype.close();
        }
    }
    
    
    Dialog.prototype = {
        init : function() { 
            this.creat();
        },
        creat : function() {
            var dialogHtml = '<div class="layer_box">'
                    +'<div class="layer_cont">'
                        +'<p class="layer_title '+this.settings.titleClass+'">'+this.settings.title+'</p>'
                        +'<p class="layer_text '+this.settings.textClass+'">'+this.settings.text+'</p>'
                        +this.creatInput()
                        +'<div class="layer_close_btn">×</div>'
                    +'</div>'
                +'</div>'
            $('body').append(dialogHtml);
            this.cancelEvent();
            this.confirmEvent();
            this.closeEvent();
        },
        creatInput : function() {
            var dialogInput = '';
            var dialogBtnGrounp = '<div class="layer_btn_group clearfix">'
                                    +'<span class="layer_btn layer_btn_cancel fl">'+this.settings.cancelText+'</span>'
                                    +'<span class="layer_btn layer_btn_confirm fr">'+this.settings.confirmText+'</span>'
                                +'</div>'
            var type = this.settings.type;
            
            if(type == 3){ // 普通提示类（牙豆）
                dialogInput = '';
            }else if(type == 1){ //话费
                dialogInput = '<p><input id="userPhone" type="number" value="" placeholder="请输入手机号必填"></input></p>'+dialogBtnGrounp
            }else if(type == 2){ //实物
                dialogInput = '<p><input id="userPhone" type="number" value="" placeholder="请输入手机号必填"></input></p>'
                +'<p><input id="userName" type="text" value="" placeholder="实物奖品需填写您的姓名"></input></p>'
                +'<p><input id="userAddress" type="text" value="" placeholder="实物奖品需填写您的地址"></input></p>'
                +dialogBtnGrounp
            }else if(type == 4){ //确认框
                dialogInput = dialogBtnGrounp;
            }
            return dialogInput;
        },
        cancelEvent : function() {
            $('.layer_btn_cancel').on('click',this.settings.cancelFunc);
        },
        confirmEvent  : function() {
            $('.layer_btn_confirm').on('click',this.settings.confirmFunc);
        },
        closeEvent  : function() {
            $('.layer_close_btn').on('click',this.close);
        },
        close : function() {
            $('.layer_box').remove();
        }
    }
    
    var rDialog = function(options) {
        return new Dialog(options);
    }
    
    window.rDialog = $.rDialog = $.dialog = rDialog;
    
})(window.jQuery || window.Zepto, window);