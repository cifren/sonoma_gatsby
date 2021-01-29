import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageSidebar from "./imageSidebar"

const PosSidebar = function () {
  const query = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "support.png" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "training.png" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3: file(relativePath: { eq: "software.png" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img4: file(relativePath: { eq: "SCM.png" }) {
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
      title: "Customer support",
      linkTo: "/services/pos-point-of-sale/customer-support",
      image: query.img1.childImageSharp.fixed,
    },
    {
      title: "Training services",
      linkTo: "/services/pos-point-of-sale/training-services",
      image: query.img2.childImageSharp.fixed,
    },
    {
      title: "Conversions",
      linkTo: "/services/pos-point-of-sale/conversions",
      image: query.img3.childImageSharp.fixed,
    },
    {
      title: "Supply management",
      linkTo: "/services/pos-point-of-sale/supply-management",
      image: query.img4.childImageSharp.fixed,
    },
  ]

  return <ImageSidebar menus={menus} />
}

export default PosSidebar
