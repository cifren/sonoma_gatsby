import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageSidebar from "./imageSidebar"

const CompanySidebar = function () {
  const query = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "POS.jpeg" }) {
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
      title: "Financial Services",
      linkTo: "/services/financial-services",
      image: query.img1.childImageSharp.fixed,
    },
    {
      title: "POS (Point of Sale)",
      linkTo: "/services/pos-point-of-sale",
      image: query.img2.childImageSharp.fixed,
    },
  ]

  return <ImageSidebar menus={menus} />
}

export default CompanySidebar
