(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 菜单 Tab 切换 */
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){
        var on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(function(p){
        p.classList.toggle('active', p.id === tab.dataset.panel);
      });
    });
  });

  /* 移动端汉堡菜单 */
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  burger.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      links.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    });
  });

  /* 平滑滚动（prefers-reduced-motion 时禁用动画，直接跳转） */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var id = a.getAttribute('href');
      if(id.length < 2) return;
      var target = document.querySelector(id);
      if(!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset
        - (id === '#home' ? 0 : 88);
      window.scrollTo({top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth'});
    });
  });
})();
