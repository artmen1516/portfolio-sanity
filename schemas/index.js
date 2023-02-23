import homePage from './documents/homePage'
import post from './documents/post'
import project from './documents/project'
import header from './documents/header'
import footer from './documents/footer'

import Hero from './objects/Hero'
import RichText from './objects/RichText'
import RecentPosts from './objects/RecentPosts'
import Link from './objects/Link'
import FeatureProjects from './objects/FeatureProjects'
import SocialIcon from './objects/SocialIcon'

const singleton = [homePage]
const documents = [post, project, header, footer]
const objects = [Hero, RichText, RecentPosts, Link, FeatureProjects, SocialIcon]
export const schemaTypes = [...singleton, ...objects, ...documents]
