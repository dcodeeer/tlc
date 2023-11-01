gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

// global 
// gsap.fromTo('header', { y: -100, opacity: 0 }, { y: 0, opacity: 1 });

// index

// index first
const indexFirst = {};
indexFirst.trigger = {
  trigger: '.index-page .first',
  start: 'bottom bottom',
  end: 'bottom top',
  toggleActions: "play pause resume reset"
};
indexFirst.delay = 0.6;

gsap.fromTo(
  '.index-page .first .slider',
  { opacity: 0 },
  { opacity: 1, delay: indexFirst.delay},
);

gsap.fromTo(
  '.index-page .first .page-info',
  { opacity: 0 },
  { opacity: 1, delay: indexFirst.delay + 0.2},
);

gsap.fromTo(
  '.index-page .first .header',
  { y: 100, opacity: 0 },
  { y: 0,opacity: 1, delay: indexFirst.delay + 0.1},
);

gsap.fromTo(
  '.index-page .first .form',
  { y: 100, opacity: 0 },
  { y: 0,opacity: 1, delay: indexFirst.delay + 0.2 },
);

// index second 

const indexSecond = {};
indexSecond.trigger = {
  trigger: '.index-page .mission',
  start: '0px bottom',
  end: 'bottom top',
  toggleActions: "play pause resume reset"
};
indexSecond.delay = 0.7;

gsap.fromTo(
  '.index-page .mission .title',
  { y: 150, opacity: 0 },
  { y: 0, opacity: 1, delay: indexSecond.delay},
);

gsap.fromTo(
  '.index-page .mission .description',
  { y: 150, opacity: 0 },
  { y: 0, opacity: 1, delay: indexSecond.delay + 0.2},
);

// index third
const indexThird = {};
indexThird.trigger = {
  trigger: '.index-page .third',
  start: '0px bottom',
  end: 'bottom top',
  toggleActions: "play pause resume reset"
};
indexThird.delay = 0.6;

gsap.fromTo(
  '.index-page .third',
  { y: 150, opacity: 0 },
  { y: 0, opacity: 1, delay: indexThird.delay},
);


// index fouth
const indexFouth = {};
indexFouth.trigger = {
  trigger: '.index-page .fouth',
  start: '0px bottom',
  end: 'bottom top',
  toggleActions: "play pause resume reset"
};
indexFouth.delay = 0.6;

gsap.fromTo(
  '.index-page .fouth .title',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, delay: indexFouth.delay, scrollTrigger: indexFouth.trigger },
);

gsap.fromTo(
  '.index-page .fouth .image',
  { x: 150, opacity: 0 },
  { x: 0, opacity: 1, delay: indexFouth.delay, scrollTrigger: indexFouth.trigger },
);

gsap.fromTo(
  '.index-page .fouth .list',
  { y: 200, opacity: 0 },
  { y: 0, opacity: 1, delay: indexFouth.delay, scrollTrigger: indexFouth.trigger },
);

gsap.fromTo(
  '.index-page .fouth .more',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, delay: indexFouth.delay, scrollTrigger: indexFouth.trigger },
);

// index sixth

const indexSixth = {};
indexSixth.trigger = {
  trigger: '.index-page .sixth',
  start: '0px bottom',
  end: 'bottom top',
  toggleActions: "play pause resume reset"
};
indexSixth.delay = 0.6;

gsap.fromTo(
  '.index-page .sixth .head',
  { y: 200, opacity: 0 },
  { y: 0, opacity: 1, delay: indexSixth.delay, scrollTrigger: indexSixth.trigger },
);