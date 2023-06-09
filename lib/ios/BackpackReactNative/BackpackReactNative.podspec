require 'json'

package = JSON.parse(File.read(File.join(__dir__, '../../package.json')))

Pod::Spec.new do |s|
  s.name         = "BackpackReactNative"
  s.version      = package['version']
  s.summary      = "Backpack for React Native"

  s.authors      = { "backpack" => "backpacksquad@skyscanner.net" }
  s.homepage     = "https://skyscanner.design/latest/components/calendar/i-os.html"
  s.license      = "MIT"
  s.platform     = :ios, "11.0"

  s.source       = { :git => "https://github.com/Skyscanner/backpack-react-native.git" }
  s.source_files  = "Classes/**/*.{h,m}"

  s.dependency 'React'
  s.dependency 'react-native-maps'
  s.dependency 'Backpack'
end
