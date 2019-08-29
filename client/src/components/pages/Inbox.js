import React from 'react';
import '../../styles/inbox.css';

export default function Inbox() {
    return (
        <div className="mailbox">
        <div className="nav-mail"> 
          <h1>Messages</h1>
            <div className="actions">            
                    <button>Compose</button>
                    <button>Delete</button>
            </div>            
        </div>
        <div className="messages">
            <div className="message">
                <input type="checkbox" />
                <div className="sender">Jane</div>
                <div className="title">hello world</div>
            </div>
            
            <div className="message">
                <input type="checkbox" />
                <div className="sender">Jane</div>
                <div className="title">hello world</div>
            </div>
            
            <div className="message">
                <input type="checkbox" />
                <div className="sender">Jane</div>
                <div className="title">hello world</div>
            </div>
            
            <div className="message">
                <input type="checkbox" />
                <div className="sender">Jane</div>
                <div className="title">hello world</div>
            </div>
            
            <div className="message">
                <input type="checkbox" />
                <div className="sender">Jane</div>
                <div className="title">hello world</div>
            </div>
            <div className="message">
                <input type="checkbox" />
                <div className="sender">Jane</div>
                <div className="title">hello world</div>
            </div>
            
            <div className="message">
                <input type="checkbox" />
                <div className="sender">Jane</div>
                <div className="title">hello world</div>
            </div>        
        </div>
        </div>
        
    )
}