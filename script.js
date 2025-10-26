// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有卡片元素
    const cards = document.querySelectorAll('.card');
    
    // 为每个卡片添加点击事件
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // 获取卡片中存储的链接
            const link = this.getAttribute('data-link');
            
            // 如果有链接，则跳转到该链接
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
    
    // 添加键盘导航支持
    document.addEventListener('keydown', function(event) {
        // 获取当前焦点元素
        const focusedElement = document.activeElement;
        
        // 如果焦点在卡片上，按回车键触发点击
        if (focusedElement.classList.contains('card') && event.key === 'Enter') {
            focusedElement.click();
        }
    });
    
    // 为卡片添加焦点样式
    cards.forEach(card => {
        card.setAttribute('tabindex', '0'); // 使卡片可以通过键盘访问
        
        card.addEventListener('focus', function() {
            this.style.outline = '3px solid #3498db';
            this.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});