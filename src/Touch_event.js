var customEvent = customEvent || {};

/**
 * 添加一个在控件绑定框范围内有效的触摸事件
 * 
 * @param targetNode 触摸控件
 * @param callFunc 触摸函数 
 * @param callTarget 触摸函数绑定节点 
 */
customEvent.addIncludeTouch = function(targetNode,callFunc,callTarget)
{
    var touchListener = cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function(touch,event)
        {
            var pos = touch.getLocation();
            var target = event.getCurrentTarget();

            var  targetParent = target.getParent();
            while (targetParent)
            {
                if (!targetParent.isVisible())
                {
                    return false;
                }

                targetParent = targetParent.getParent();
            }

            if(cc.rectContainsPoint(target.getBoundingBoxToWorld(),pos))
            {
                return true;
            }

            return false;
        },
        onTouchEnded:function(touch,event)
        {
            var pos = touch.getLocation();
            var target = event.getCurrentTarget();

            if(cc.rectContainsPoint(target.getBoundingBoxToWorld(),pos))
            {
                callTarget&&callFunc&&callFunc.call(callTarget);
            }
        }
    });

    cc.eventManager.addListener(touchListener,targetNode);
}

/**
 * 添加一个在控件绑定框范围外有效的触摸事件
 * 
 * @param targetNode 触摸控件
 * @param callFunc 触摸函数 
 * @param callTarget 触摸函数绑定节点 
 */
customEvent.addExcludeTouch = function(targetNode,callFunc,callTarget)
{
    var touchListener = cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function(touch,event)
        {
            var pos = touch.getLocation();
            var target = event.getCurrentTarget();

            var  targetParent = target.getParent();
            while (targetParent)
            {
                if (!targetParent.isVisible())
                {
                    return false;
                }

                targetParent = targetParent.getParent();
            }

            if(!cc.rectContainsPoint(target.getBoundingBoxToWorld(),pos))
            {
                return true;
            }

            return false;
        },
        onTouchEnded:function(touch,event)
        {
            var pos = touch.getLocation();
            var target = event.getCurrentTarget();
            if(!cc.rectContainsPoint(target.getBoundingBoxToWorld(),pos))
            {
                callTarget&&callFunc&&callFunc.call(callTarget);
            }
        }
    });

    cc.eventManager.addListener(touchListener,targetNode);
}