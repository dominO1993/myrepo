const burgerBtn = document.querySelector('.nav__burger');
const navDesktop = document.querySelector('.nav__desktop');
const navMobile = document.querySelector('.nav__mobile');
const allNavMobileItems = document.querySelectorAll('.nav__mobile a');
const navLink = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');
const allSections = document.querySelectorAll('.section');
const aboutImg = document.querySelector('.aboutme-box-img');

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

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 100
		) {
			burgerBtn.classList.add('nav__burger--dark-section');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 100
			// aboutImg.classList.contains('dark-section')
		) {
			burgerBtn.classList.remove('nav__burger--dark-section');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

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

	handleObserver();
});
