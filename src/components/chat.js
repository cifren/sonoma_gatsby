import React from "react"
import ScriptTag from "react-script-tag"

const Chat = function () {
  const config = {
    restAPI: "https://app.five9.com",
    rootUrl: "https://app.five9.com/consoles/",
    tenant: "Sonoma OnLine Services",
    profiles: "SONOMA WEBSITE CHAT",
    title: "Technical Support",
    showProfiles: true,
  }

  // This function assembles the URL for the chat window based on the values
  // in the Config JSON object and opens the window.
  const openChat = function () {
    var rootUrl = config.rootUrl + "ChatConsole"
    var url = rootUrl
    var elementCounter = 0

    for (var key in config) {
      url = url + (elementCounter++ === 0 ? "?" : "&")
      if (config.hasOwnProperty(key)) {
        url = url + key + "=" + config[key]
      }
    }
    var chatUrl = encodeURI(url)
    var props =
      "width=600,height=550,location=no,menubar=no,resizable=yes,scrollbars=no,status=no,titlebar=no,toolbar=no"
    window.open(chatUrl, "Five9Chat", props)
    return false
  }

  return (
    <div>
      <ScriptTag src="https://app.five9.com/consoles/SocialWidget/five9-social-widget.min.js" />
      <a onClick={openChat} href="/#" class="our-chat">
        Chat
      </a>
    </div>
  )
}

export default Chat
