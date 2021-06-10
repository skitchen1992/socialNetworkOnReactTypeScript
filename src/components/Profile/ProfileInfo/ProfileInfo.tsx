import classes  from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div className={classes.img1}></div>
            <div className={classes.userInfo}>
                <div className={classes.logo}>
                    <img className={classes.img} src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                         alt=""></img>
                </div>

                <div className={classes.about}>
                    <div className={classes.name}>Nikita L</div>
                    <p>Date of Birth:<span>2 january</span></p>
                    <p>City:<span>Moscow</span></p>
                    <p>Education:<span>BSU 11</span></p>
                    <p>WEB Site:<span>http://it-kama.com</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;