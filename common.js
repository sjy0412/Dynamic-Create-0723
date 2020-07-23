function my$(id) {
	return document.getElementById(id);
}//获取id的元素

//处理浏览器兼容性
//获取第一个子元素
function getFirstElementChild(element) {
	var node, nodes = element.childNodes, i = 0;
	while (node = nodes[i++]){
		if (node.nodeType ===1) {
			return node;
		}
	}
	return null;
}

//处理innerText和textContent的浏览器兼容性问题
function setInnerText(element, content) {
	//判断当前浏览器是否支持innerText
	if(typeof element.innerText ==='string') {
		element.innerText = content;
	}else {
		element.textContent = content;
	}
}