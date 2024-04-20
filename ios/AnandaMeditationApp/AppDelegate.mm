#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"AnandaMeditationApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.

  //  var pubInfo: [String: Any] = [:]
  //       pubInfo["AdId"] = "AdId"
  //       pubInfo["osType"] = "osType"
  //       pubInfo["lang"] = "lang"
  //       pubInfo["platform"] = "platform"
  //       pubInfo["timestamp"] = "timestamp"
  //       pubInfo["version"] = "version"
  //       pubInfo["darkMode"] = "darkMode"

  //       var mutableDictionary: [String: Any] = [:]
  //       mutableDictionary["appId"] = "appId"
  //       mutableDictionary["osType"] = "osType"
  //       mutableDictionary["PUB_INFO"] = pubInfo
  //       self.initialProps = mutableDictionary
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
