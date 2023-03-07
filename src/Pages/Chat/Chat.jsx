import React from 'react';
import Draggable from 'react-draggable';

const Chat = () => {
    return (
        <div>
            <Draggable
                axis="xy"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                    <div className="handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                </div>
            </Draggable>
        </div>
    );
};

export default Chat;