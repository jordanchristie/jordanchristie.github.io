import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const ParticleBackground = ({children}) => (
    <Background params={options}>
        {children}
    </Background>
)

export default ParticleBackground

const options = {
    
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 7,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            },
        "move": {
            "enable": true,
            "speed": 2.6,
            "direction": "top",
            "random": false,
            "straight": false,
            "out_mode": "out",
        }
    },
    "retina_detect": true    
}

const Background = styled(Particles)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -10;
`