import React, { Component } from 'react'

export class Card extends Component {
  render() {
    let audio = new Audio(this.props.characters.map((character) => {
        return character.sound
      }))

    return (
        <div className="bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {this.props.characters.map((character) => (
                <li key={character.name} className="py-10 px-6 bg-gray-800 hover:bg-gray-700 text-center rounded-lg xl:px-10 xl:text-left transition duration-150">
                  <div className="space-y-6 xl:space-y-10">
                    <img className="mx-auto h-40 w-40 xl:w-56 xl:h-56" src={character.img} alt="" />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3 className="text-white">{character.name}</h3>
                        <p className="text-indigo-400">{character.role}</p>
                      </div>
  
                      <ul className="flex justify-center space-x-5">
                        <li>
                          <a href={character.twitterUrl} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path 
                              fillRule="evenodd"
                              d="M11 2.2C6.1402 2.2 2.2 6.1402 2.2 11C2.2 15.8598 6.1402 19.8 11 19.8C15.8598 19.8 19.8 15.8598 19.8 11C19.8 6.1402 15.8598 2.2 11 2.2L11 2.2ZM14.8896 11.2948L9.3104 14.5156C9.02953 14.6777 8.8 14.5449 8.8 14.2208L8.8 7.77847C8.8 7.45433 9.02953 7.3216 9.3104 7.48367L14.8896 10.7045C15.1705 10.8673 15.1705 11.1327 14.8896 11.2948L14.8896 11.2948Z"
                              clipRule="evenodd" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={character.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M11 2.2C6.1402 2.2 2.2 6.1402 2.2 11C2.2 15.8598 6.1402 19.8 11 19.8C15.8598 19.8 19.8 15.8598 19.8 11C19.8 6.1402 15.8598 2.2 11 2.2L11 2.2ZM11.7333 15.4L10.2667 15.4L10.2667 10.2667L11.7333 10.2667L11.7333 15.4L11.7333 15.4ZM11 8.43333C10.3928 8.43333 9.9 7.94053 9.9 7.33333C9.9 6.72613 10.3928 6.23333 11 6.23333C11.6072 6.23333 12.1 6.72613 12.1 7.33333C12.1 7.94053 11.6072 8.43333 11 8.43333L11 8.43333Z"
                                clipRule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </div>
    )
  }
}

export default Card