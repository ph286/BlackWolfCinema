'use strict'

const big = document.querySelector('.big')
const point = document.querySelector('.point')

point.forEach( (eachPoint, i)=>{
    point[i].addEventListener('click', ()=>{
        let position = i

        let operation = position * -50

        big.style.transform = `translateX(${operation}%)`

        point.forEach( (eachPoint, i)=>{
            point[i].classList.remove('active')
        })

        point[i].classList.add('active')
    })
})