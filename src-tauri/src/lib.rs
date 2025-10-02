// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// NFC verification command
#[tauri::command]
fn verify_nfc_tag(uid: String) -> Result<bool, String> {
    // For now, accept any non-empty UID as valid
    // TODO: Replace with actual database/ACL verification
    println!("Backend: verify_nfc_tag called with UID: '{}'", uid);
    
    if uid.is_empty() {
        println!("Backend: UID is empty, returning false");
        return Ok(false);
    }
    
    // Mock verification - accept all tags for development
    // In production, check against database of authorized tags
    println!("Backend: UID is valid, returning true");
    Ok(true)
}

// Future: NFC watcher command (skeleton for when you get the hardware)
#[tauri::command]
fn start_nfc_watcher() -> Result<String, String> {
    // TODO: Implement actual NFC scanning with pcsc crate
    // For now, just return a message
    println!("NFC watcher would start here (hardware not implemented yet)");
    Ok("NFC watcher ready (mock mode)".to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, verify_nfc_tag, start_nfc_watcher])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
