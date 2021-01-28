import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ImageSidebar = function({menus}) {

    console.log(menus)
    return <div class="text-center py-5">
        {menus.map(menu => {            
            return <div class="mb-4">
                <div class="mb-2">
                    <Link to={menu.linkTo}>
                        <Img 
                            fixed={menu.image}
                            alt={menu.title}
                        />
                    </Link>
                </div>
                
                <div><Link to={menu.linkTo}>{menu.title}</Link></div>
            </div>
        })}
    </div>
}

export default ImageSidebar