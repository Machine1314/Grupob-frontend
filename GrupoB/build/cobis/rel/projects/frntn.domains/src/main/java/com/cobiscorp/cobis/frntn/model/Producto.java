package com.cobiscorp.cobis.frntn.model;

import java.util.ArrayList;
import java.util.List;
import java.math.BigDecimal;
import com.cobiscorp.designer.api.Property;

public class Producto {

	public static final String EN_PRODUCTOO_275 = "EN_PRODUCTOO_275";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Producto";
	
	
	public static final Property<Integer> SECUENCIAL = new Property<Integer>("secuencial", Integer.class, false);
	
	public static final Property<String> NOMBRE = new Property<String>("nombre", String.class, false);
	
	public static final Property<String> CODIGO = new Property<String>("codigo", String.class, false);
	
	public static final Property<BigDecimal> PRECIO = new Property<BigDecimal>("precio", BigDecimal.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
