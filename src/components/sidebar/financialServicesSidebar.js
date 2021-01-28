import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageSidebar from './imageSidebar'

const FinancialServicesSidebar = function() {
    const query = useStaticQuery(graphql`
        query {
            img1: file(relativePath: { eq: "onlinebanking.png" } ) {
                childImageSharp {
                    fixed(width: 129) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            img2: file(relativePath: { eq: "update.png" } ) {
                childImageSharp {
                    fixed(width: 129) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            img3: file(relativePath: { eq: "banking.png" } ) {
                childImageSharp {
                    fixed(width: 129) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            img4: file(relativePath: { eq: "ATM.jpg" } ) {
                childImageSharp {
                    fixed(width: 129) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const menus = [
        {
            title: "Online Banking",
            linkTo: "/services/financial-services/online-banking",
            image: query.img1.childImageSharp.fixed,
        },
        {
            title: "Conversion Support",
            linkTo: "/services/financial-services/conversion-support",
            image: query.img2.childImageSharp.fixed,
        },
        {
            title: "Lost and Stolen Debit Card",
            linkTo: "/services/financial-services/lost-or-stolen-debit-card",
            image: query.img3.childImageSharp.fixed,
        },
        {
            title: "ATM Support Services",
            linkTo: "/services/financial-services/atm-support-services",
            image: query.img4.childImageSharp.fixed,
        }
    ]

    return <ImageSidebar menus={menus}/>
}

export default FinancialServicesSidebar