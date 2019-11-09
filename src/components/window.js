import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone'
import './window.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactTooltip from 'react-tooltip'
function Window(props) {
	let className = props.sidebarState.isWindowOpen ? ' open' : '';
	return (
		<div className={'Window' + className} >

			<Row className='fill'>
				<div className="Window-x" onClick={() => {
					props.sidebarState.setWindowOpen(false);
					props.windowState("App Blur off");

				}}>
				</div>
				<Col md={6} className='center' >
					<LeftWindow />
				</Col>
				<Col md={6} className="window-right"   >
					<div className="center fill">
						<RightWindow />
					</div>
				</Col>
			</Row>
		</div>
	)
}
function LeftWindow(props) {
	var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
		, "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
		, "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
		, "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
		, "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
		, "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
		, "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
		, "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
		, "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
		, "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
		, "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
		, "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
		, "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia"
		, "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay"
		, "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
	let countries = country_list.map((country) => <option key={country}>{country}</option>);
	return (
		<div className="window-left">
			<ReactTooltip place="right" type="dark" effect="solid">
				Let us know who you are and where you're coming from.<br></br>
				what inspires you, who you have worked with and what you think<br></br>
				is interesting about your work in the world of music and film, etc.<br></br>
				How should we present you as an artist?
			</ReactTooltip>
			<h1>Submit your music</h1>
			<fieldset className="left-window-fieldset">
				<legend style={{width:"85px"}}>Full name:</legend>
				<input type="text" size="30"></input>
			</fieldset>
			<br></br>
			<input placeholder="E-mail" className="window-left-input" type="text" size="30"></input>
			<br></br>
			<select placeholder="E-mail" defaultValue="Country" className="window-left-input" >
				<option value="Country" disabled hidden>Country</option>
				{countries}
			</select>
			<br></br>

			<textarea data-tip="React-tooltip" placeholder="Bio" className="window-left-input window-left-input-bio " type="text" size="30"></textarea>
			<br></br>
			<select placeholder="E-mail" defaultValue="default" className="window-left-input" >
				<option value="default" disabled  hidden>What do you do?</option>
				<option >i do music</option>
			</select>
			<br></br>
			<input placeholder="Portfolio Links" className="window-left-input" type="text" size="30"></input>
			<br></br>
			<ul className="window-left-list">
				Are you registered with a PRO?
				<li>
					<label className="input-container">
						<input name="is-pro-radio" type="radio"></input>
						Yes
						<div style={{ position: 'relative', height: '25px', width: '25px', marginLeft: '5px' }}>
							<span className="radio-button"></span>
						</div>
					</label>
				</li>
				<li>
					<label className="input-container">
						<input name="is-pro-radio" type="radio"></input>
						No
						<div className="radio-button-container">
							<span className="radio-button"></span>
						</div>
					</label>
				</li>
			</ul>
		</div>
	)
}
function RightWindow(props) {
	return (
		<div>
			<p>
				Upload music <span className="text-gray">4-6 songs</span>
			</p>
			<MyDropzone></MyDropzone>
			<br></br>
			<ul className="window-right-list">
				<li>
					<label className="input-container">
						<input name="upload-checkbox" type="checkbox"></input>
						<div className="checkbox-button-container">
							<span className="checkbox-button"></span>
						</div>
						<p className="text-gray" style={{fontSize:'10px',marginLeft:'1em'}}>I have full rights to the music.</p>
					</label>
				</li>
				<li>
					<label className="input-container">
						<input name="upload-checkbox" type="checkbox"></input>
						<div className="checkbox-button-container">
							<span className="checkbox-button"></span>
						</div>
						<p className="text-gray" style={{fontSize:'10px',marginLeft:'1em'}}>None of the songs are a cover of another artist's material.</p>
					</label>
				</li>
				<li>
					<label className="input-container">
						<input name="upload-checkbox" type="checkbox"></input>
						<div className="checkbox-button-container">
							<span className="checkbox-button"></span>
						</div>
						<p className="text-gray" style={{fontSize:'10px',marginLeft:'1em'}}>The music is clear of use in any web platform, including YouTube monetization.</p>
					</label>
				</li>
			</ul>
		</div>
	)
}
function MyDropzone(props) {
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		console.log(acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{
				isDragActive ?
					<div style={{position:'relative'}}>
						{/* <div className="topbottom"></div> */}
						{/* <div className="leftright"></div> */}
						<div className="dropzone-container center dropzone-active">
							<p>Drop the files here ...</p>
						</div>
					</div>
					:
					<div style={{position:'relative'}}>
						{/* <div className="topbottom"></div> */}
						{/* <div className="leftright"></div> */}
						<div className="dropzone-container center dropzone-inactive">
							<p><span style={{ color: 'yellow' }}>Click to upload</span> or drag and drop here</p>
							<span className="text-gray">MP3 / WAV format</span>
						</div>
					</div>	
			}
		</div>
	)
}
export default Window;
