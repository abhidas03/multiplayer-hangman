import React from 'react'
import './Hangman.css'
export default function Hangman() {
  return (
    <>
        <svg height="400" width="400">
            <g id="body">
                <g id="head">
                <circle cx="200" cy="80" r="20" stroke="black" stroke-width="4" fill="white"/>
                <g id="rEyes">
                <circle cx="193" cy="80" r="4"/>
                <circle cx="207" cy="80" r="4"/>
                </g>
                <g id="xEyes" class="hide">
                    <line x1="190" y1="78" x2="196" y2="84"/>
                    <line x1="204" y1="78" x2="210" y2="84"/>
                    <line x1="190" y1="84" x2="196" y2="78"/>
                    <line x1="204" y1="84" x2="210" y2="78"/>
                </g>
                </g>
                <line x1="200" y1="100" x2="200" y2="150" />
                <line id="armL" x1="200" y1="120" x2="170" y2="140" />
                <line id="armR" x1="200" y1="120" x2="230" y2="140" />
                <line id="legL" x1="200" y1="150" x2="180" y2="190" />
                <line id="legR" x1="200" y1="150" x2="220" y2="190" />
            </g>
                <line x1="10" y1="250" x2="150" y2="250" />
                <line id="door1" x1="150" y1="250" x2="200" y2="250" />
                <line  id="door2" x1="200" y1="250" x2="250" y2="250" />
                <line x1="250" y1="250" x2="390" y2="250" />
                <line x1="100" y1="250" x2="100" y2="20" />
                <line x1="100" y1="20" x2="200" y2="20" />
                <line id="rope" x1="200" y1="20" x2="200" y2="60" />
        </svg>
    </>
  )
}
