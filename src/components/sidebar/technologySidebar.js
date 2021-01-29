import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageSidebar from "./imageSidebar"

const TechnologySidebar = function () {
  const query = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "crm.png" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "solution.png" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3: file(relativePath: { eq: "questions.png" }) {
        childImageSharp {
          fixed(width: 129) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img4: file(relativePath: { eq: "contact.png" }) {
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
      title: "CRM",
      linkTo: "/technology/crm-customer-relationship-management",
      image: query.img1.childImageSharp.fixed,
    },
    {
      title: "Trouble Ticket",
      linkTo: "/technology/trouble-ticketing-system",
      image: query.img2.childImageSharp.fixed,
    },
    {
      title: "Knowledge Base",
      linkTo: "/technology/knowledge-base",
      image: query.img3.childImageSharp.fixed,
    },
    {
      title: "Call routing",
      linkTo: "/technology/call-routing",
      image: query.img4.childImageSharp.fixed,
    },
  ]

  return <ImageSidebar menus={menus} />
}

export default TechnologySidebar
