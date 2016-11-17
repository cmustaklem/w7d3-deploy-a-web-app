'use strict'

//According to the Adonis Page, by extending Lucid, they inherit some default behavior and methods to manipulate data inside an SQL table. Models inherit a handful of properties from Lucid base class, which prevents you from re-writing the same code again and again.

const Lucid = use('Lucid')

class Chat extends Lucid {}

module.exports = Chat
