new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("你问我有多爱你")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("大概就是再遇见你一百次，也会沦陷一百次")
    .pause(3000)
    .go();

new TypeIt('#talkToGLL', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();