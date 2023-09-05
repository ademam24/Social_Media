import React from 'react'
import './Share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Button } from 'react-bootstrap';

export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="shareTop">
                <img className='shareprofileimg' src="/assets/persons/3.jpeg" alt=" " />
              <input className='ShareText' type='text' placeholder='What Is In Your Mind'/>
            </div>
            <hr className='SharHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareoption">
                        <PermMediaIcon htmlColor='tomato' className="ShareIcon"/>
                        <span className='optiontext'>Photo/Video</span>
                    </div>
                    <div className="shareoption">
                        <LabelIcon htmlColor='blue' className="ShareIcon"/>
                        <span className='optiontext'>Tag</span>
                    </div>
                    <div className="shareoption">
                        <AddLocationAltIcon  htmlColor='green' className="ShareIcon"/>
                        <span className='optiontext'>Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotionsIcon  htmlColor='goldenrod' className="ShareIcon"/>
                        <span className='optiontext'>Feelings</span>
                    </div>
                </div>
                <Button className='shareButton' variant='primary'>Share</Button>
            </div>
        </div>
    </div>
  )
}
