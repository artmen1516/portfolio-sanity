import homePage from './documents/homePage'

import post from './documents/post'

import Hero from './objects/Hero'
import RichText from './objects/RichText'
import RecentPosts from './objects/RecentPosts'

const singleton = [homePage]
const documnents = [post]
const objects = [Hero, RichText, RecentPosts]
export const schemaTypes = [...singleton, ...objects, ...documnents]
