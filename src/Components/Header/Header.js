import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../../App';
import './Header.css';

const labels = {
  en: { about:'About', products:'Products', industries:'Industries', faq:'FAQ', news:'News', contact:'Contact', menu:'Menu' },
  zh: { about:'关于我们', products:'产品', industries:'行业', faq:'常见问题', news:'新闻', contact:'联系我们', menu:'菜单' }
};
export default function Header(){
 const [open,setOpen]=useState(false); const {language,setLanguage}=useLanguage(); const t=labels[language];
 const nav=[['/about',t.about],['/products',t.products],['/industries',t.industries],['/faq',t.faq],['/blog',t.news],['/contact',t.contact]];
 return <header className="site-header"><div className="container header-inner">
   <Link to="/" className="brand" onClick={()=>setOpen(false)}><img src="/brand/zj-energy-logo.svg" alt="Guangdong ZJ Energy"/></Link>
   <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label={t.menu}>☰</button>
   <nav className={open?'nav open':'nav'}>{nav.map(([path,label])=><NavLink key={path} to={path} onClick={()=>setOpen(false)}>{label}</NavLink>)}
     <button className="lang" onClick={()=>setLanguage(language==='en'?'zh':'en')}>{language==='en'?'中文':'EN'}</button>
   </nav>
 </div></header>
}
