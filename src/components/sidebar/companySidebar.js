import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageSidebar from "./imageSidebar"

const CompanySidebar = function () {
  const query = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "management.png" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "career.jpg" }) {
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
      title: "Management",
      linkTo: "/company/management",
      image: query.img1.childImageSharp.fixed,
    },
    {
      title: "Career",
      linkTo: "/company/careers",
      image: query.img2.childImageSharp.fixed,
    },
  ]

  return <ImageSidebar menus={menus} />
}

export default CompanySidebar
