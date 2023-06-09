'use strict'

export function Stack() {
  let items = []
  this.push = function(element) {
    items.push(element)
  }
  this.pop = function() {
    return items.pop()
  }
  this.peek = function() {
    return[items.length-1]
  }
  this.isEmpty = function() {
    return items.length == 0
  }
  this.clear = function() {
    items = []
  }
  this.print = function() {
    console.log(items.toString())
  }
}
