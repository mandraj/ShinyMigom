
    const select = (selectListSelector, contentSelector, display = 'block') => {
        const content = document.querySelectorAll(contentSelector),
              selectList =document.querySelector(selectListSelector);
    
        
        selectList.addEventListener('change', (e) => {
            content.forEach((item, i) => {
                item.style.display = 'none';
    
                if (item.id === event.target.value) {
                    content[i].style.display = display;
                }
            })
        })
    }


export default select;