// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.executeScript(null,{file: "./jquery-3.5.1.js"},() => console.log('executed'));
    chrome.tabs.executeScript(null,{file: "./foreground.js"},() => console.log('executed'));
   console.log(tab);
});



