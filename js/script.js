const burgerBtn = document.querySelector('.nav__burger');
const navDesktop = document.querySelector('.nav__desktop');
const navMobile = document.querySelector('.nav__mobile');
const allNavMobileItems = document.querySelectorAll('.nav__mobile a');
const navLink = document.querySelectorAll('.nav__link');

const handleNav = () => {
	navMobile.classList.toggle('nav__mobile--active');
	burgerBtn.classList.toggle('nav__burger--dark');
};

allNavMobileItems.forEach(item =>
	item.addEventListener('click', () => {
		navMobile.classList.remove('nav__mobile--active');
		burgerBtn.classList.remove('nav__burger--dark');
	})
);

burgerBtn.addEventListener('click', handleNav);

window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		navDesktop.classList.add('nav--transparent');
		navDesktop.classList.add('nav__desktop--color');
		navLink.forEach(link => link.classList.add('nav__link--color'));
	} else {
		navDesktop.classList.remove('nav--transparent');
		navDesktop.classList.remove('nav__desktop--color');
		navLink.forEach(link => link.classList.remove('nav__link--color'));
	}
});
