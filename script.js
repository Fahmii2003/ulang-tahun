window.addEventListener('load', () => {
  Swal.fire({
    title: 'Mau pake background musiknya, ngga mez?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Iya',
    cancelButtonText: 'Ngga',
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('.song').play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

// Animation timeline
const animationTimeline = () => {
  // split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName('hbd-chatbox')[0];
  const hbd = document.getElementsByClassName('wish-hbd')[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split('')
    .join('</span><span>')}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split('')
    .join('</span><span>')}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: '15deg',
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: '-15deg',
  };

  const verticalAnimation = {
    opacity: 0,
    y: -20,
  };
  const verticalAnimationLeave = {
    opacity: 0,
    y: 20,
  };

  // timeline
  const tl = new TimelineMax();

  tl.to('.container', 0.6, {
    visibility: 'visible',
  })
    .from('.satu-satu', 0.7, {
      opacity: 0,
      y: 10,
    })
    .from('.satu-dua', 1.5, {
      opacity: 0,
      y: 10,
    })
    .to(
      '.satu-satu',
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      '+=3.5'
    )
    .to(
      '.satu-dua',
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      '-=1'
    )
    .from('.dua-satu', 0.7, {
      opacity: 0,
      y: 10,
    })
    .from('.dua-dua', 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      '.dua-satu',
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      '+=2.5'
    )
    .to('.dua-dua', 0.7, {
      opacity: 0,
      y: 10,
    })
    .from('.content-tiga', 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from('.fake-btn', 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      '.hbd-chatbox span',
      1.5,
      {
        visibility: 'visible',
      },
      0.05
    )
    .to(
      '.fake-btn',
      0.1,
      {
        backgroundColor: '#c000c0',
        scale: 0.9,
      },
      '+=4'
    )
    .to(
      '.content-tiga',
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      '+=1'
    )
    .from('.ide-1', 0.7, ideaTextTrans)
    .to('.ide-1', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-2', 0.7, ideaTextTrans)
    .to('.ide-2', 0.7, ideaTextTransLeave, '+=3.5')
    .from('.ide-3', 0.7, ideaTextTrans)
    .to('.ide-3', 0.7, ideaTextTransLeave, '+=2')
    .from('.ide-4', 0.7, ideaTextTrans)
    .to('.ide-4', 0.7, ideaTextTransLeave, '+=4')
    .from('.ide-5', 0.7, verticalAnimation)
    .to('.ide-5', 0.7, verticalAnimationLeave, '+=4.5')
    .from('.ide-6', 0.7, verticalAnimation)
    .to('.ide-6', 0.7, verticalAnimationLeave, '+=4.5')
    .from('.ide-7', 0.7, ideaTextTrans)
    .to('.ide-7', 0.7, ideaTextTransLeave, '+=4')
    .from('.ide-8', 0.7, ideaTextTrans)
    .to('.ide-8', 0.7, ideaTextTransLeave, '+=1')
    .from('.ide-9', 0.7, ideaTextTrans)
    .to('.ide-9', 0.7, ideaTextTransLeave, '+=3')
    .from('.ide-10', 0.7, ideaTextTrans)
    .to('.ide-10', 0.7, ideaTextTransLeave, '+=2')
    .from('.ide-11', 0.7, ideaTextTrans)
    .to('.ide-11', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-12', 0.7, ideaTextTrans)
    .to('.ide-12', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-13', 0.7, ideaTextTrans)
    .to('.ide-13', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-14', 0.7, ideaTextTrans)
    .to('.ide-14', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-15', 0.7, ideaTextTrans)
    .to('.ide-15', 0.7, ideaTextTransLeave, '+=2')
    .from('.ide-16', 0.7, ideaTextTrans)
    .to('.ide-16', 0.7, ideaTextTransLeave, '+=4')
    .from('.ide-17', 0.7, ideaTextTrans)
    .to('.ide-17', 0.7, ideaTextTransLeave, '+=3')
    .from('.ide-18', 0.7, ideaTextTrans)
    .to('.ide-18', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-19', 0.7, verticalAnimation)
    .to('.ide-19', 0.7, verticalAnimationLeave, '+=4')
    .from('.ide-20', 0.7, ideaTextTrans)
    .to('.ide-20', 0.7, ideaTextTransLeave, '+=3.5')
    .from('.ide-21', 0.7, ideaTextTrans)
    .to('.ide-21', 0.7, ideaTextTransLeave, '+=1')
    .from('.ide-22', 0.7, ideaTextTrans)
    .to('.ide-22', 0.7, ideaTextTransLeave, '+=3.5')
    .from('.ide-23', 0.7, ideaTextTrans)
    .to('.ide-23', 0.7, ideaTextTransLeave, '+=3.5')
    .from('.ide-24', 0.7, ideaTextTrans)
    .to('.ide-24', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-25', 0.7, verticalAnimation)
    .to('.ide-25', 0.7, verticalAnimationLeave, '+=15')
    .from('.ide-26', 0.7, ideaTextTrans)
    .to('.ide-26', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-27', 0.7, ideaTextTrans)
    .to('.ide-27', 0.7, ideaTextTransLeave, '+=3')
    .from('.ide-28', 0.7, ideaTextTrans)
    .to('.ide-28', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-29', 0.7, ideaTextTrans)
    .to('.ide-29', 0.7, ideaTextTransLeave, '+=4.5')
    .from('.ide-30', 0.7, ideaTextTrans)
    .to('.ide-30', 0.7, ideaTextTransLeave, '+=3')
    .from('.ide-31', 0.7, ideaTextTrans)
    .to('.ide-31', 0.7, ideaTextTransLeave, '+=5.5')
    .from('.ide-32', 0.7, verticalAnimation)
    .to('.ide-32', 0.7, verticalAnimationLeave, '+=8.5')
    .from('.ide-37', 0.7, ideaTextTrans)
    .to('.ide-37', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-33', 0.7, ideaTextTrans)
    .to('.ide-33', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.ide-34', 0.7, verticalAnimation)
    .to('.ide-34', 0.7, verticalAnimationLeave, '+=5.5')
    .from('.ide-38', 0.7, verticalAnimation)
    .to('.ide-38', 0.7, verticalAnimationLeave, '+=4.5')
    .from('.ide-39', 0.7, verticalAnimation)
    .to('.ide-39', 0.7, verticalAnimationLeave, '+=4.5')
    .from('.ide-40', 0.7, verticalAnimation)
    .to('.ide-40', 0.7, verticalAnimationLeave, '+=1')
    .from('.ide-41', 0.7, verticalAnimation)
    .to('.ide-41', 0.7, verticalAnimationLeave, '+=5.5')
    .from('.ide-42', 0.7, verticalAnimation)
    .to('.ide-42', 0.7, verticalAnimationLeave, '+=2.5')
    .from(
      '.ide-35',
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: '-5deg',
        y: 50,
        z: 10,
        opacity: 0,
      },
      '+=1.5'
    )
    .to(
      '.ide-35',
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      '+=2'
    )
    .staggerFrom(
      '.ide-36 span',
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      '.ide-36 span',
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      '+=1.5'
    )
    .staggerFromTo(
      '.baloons img',
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      '.card',
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      '-=2'
    )
    .from('.hat', 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      '.wish-hbd span',
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: '30deg',
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      '.wish-hbd span',
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: '#ff69b4',
        ease: Expo.easeOut,
      },
      0.1,
      'party'
    )
    .from(
      '.wish h5',
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: '-15deg',
      },
      'party'
    )
    .staggerTo(
      '.content-tujuh svg',
      1.5,
      {
        visibility: 'visible',
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to('.content-lima', 0.5, {
      opacity: 0,
      y: 30,
      zIndex: '-1',
    })
    .staggerFrom('.content-replay p', 1, ideaTextTrans, 1.2);

  // Restart Animation on click
  const replyBtn = document.querySelector('.replay-btn');
  replyBtn.addEventListener('click', () => {
    tl.restart();
  });
};
