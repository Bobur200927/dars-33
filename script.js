let h = document.querySelector('h1')
let d = document.querySelector('.container')
let ctx = document.querySelector('.context')
let inp = document.querySelector('input')

// ? ============================ TOUCH XODISALAR ============================

// ----------- touchstart, touchend, touchmove ----------------

// addEventListener('touchstart', (e)=>{
//     let start = e.changedTouches[0].pageX
//     console.log(start);
//     addEventListener('touchmove', ()=>{
//         addEventListener('touchend', (ev)=>{
//             let end = ev.changedTouches[0].pageX
//             console.log(end);
//             if (start < end && start < 50) {
//                 ctx.classList.add('contextActive')
//             }else{
//                 ctx.classList.remove('contextActive')
//             }
//         })
//     })
// })

// ? =======  Vazifa ========

// location.reload()

// addEventListener('touchstart', (e)=>{
//     let start = e.changedTouches[0].pageY
//     console.log(start);
//     addEventListener('touchmove', ()=>{
//         addEventListener('touchend', (ev)=>{
//             let end = ev.changedTouches[0].pageY
//             console.log(end);
//             if (start > end) {
//                 location.reload(1)
//             }else{
//                 location.reload(0)
//             }
//         })
//     })
// })


// ? =========== Vazifa 2 ============

let r = document.querySelector('.round')

addEventListener('touchmove', (e)=> {
    r.style.top = e.changedTouches[0].pageY - 50 + 'px'
    r.style.left = e.changedTouches[0].pageX - 50 + 'px'
})
