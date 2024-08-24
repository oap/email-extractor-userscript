# Email Extractor Userscript

This userscript is designed to extract email addresses from the class list table in a D2L (Desire2Learn) learning shell. It simplifies the process of copying email addresses for use in other systems, such as the AWS Academy Learning Management System.

## Features

- Adds an "Extract Emails" button to the D2L class list page.
- Extracts email addresses from the table and copies them to your clipboard.
- Provides notifications to confirm when emails have been copied or if no emails were found.

## Why Use This Script?

As an instructor or administrator using both D2L and AWS Academy Learning Management System, you often need to move student email lists between systems. This script saves you time by automatically extracting the email addresses from D2L and copying them to your clipboard, ready to be pasted into AWS Academy or any other system.

## Installation

To use this script, you'll need to have a userscript manager installed in your web browser. We recommend Violentmonkey, but Tampermonkey is also supported.

1. **Install a Userscript Manager**:
   - [Violentmonkey](https://violentmonkey.github.io/get-it/) (recommended)
   - [Tampermonkey](https://www.tampermonkey.net/)

2. **Install the Email Extractor Userscript**:
   - Click [here](https://github.com/oap/email-extractor-userscript/raw/main/email-extractor.user.js) to install the script.

## Usage

1. **Navigate to the D2L Class List Page**:
   - Open your D2L platform and go to the class list page for the course you’re interested in.

2. **Click the "Extract Emails" Button**:
   - A new "Extract Emails" button will appear in the D2L interface. Click this button to extract all email addresses from the class list.

3. **Use the Email List in Other Systems**:
   - The email addresses will be copied to your clipboard automatically. You can now paste them directly into the AWS Academy Learning Management System or any other platform.

## Permissions

- **Clipboard Access**: The script needs access to your clipboard to copy the extracted emails.
- **Notifications**: The script uses browser notifications to provide feedback after extracting emails.

## Browser Compatibility

This script has been tested with the following browsers:
- Google Chrome
- Mozilla Firefox

Other browsers with userscript manager support should work as well, but they may require additional testing.

## License

This project is licensed under the [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](LICENSE). You are free to use, modify, and distribute this script without any restrictions.

## Contributing

Contributions are welcome! Feel free to open an issue to suggest improvements or report bugs. If you want to contribute code, please open a pull request.

## Support

If you have any issues or need help, please visit the [support page](https://github.com/oap/email-extractor-userscript/issues) to open an issue.

## Acknowledgments

This script was developed to streamline administrative tasks and facilitate easier data transfer between D2L and other learning management systems. Special thanks to the open-source community for providing the tools and platforms that made this script possible.
