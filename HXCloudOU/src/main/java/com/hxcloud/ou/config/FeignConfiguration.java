package com.hxcloud.ou.config;

import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = "com.hxcloud.ou")
public class FeignConfiguration {

}
