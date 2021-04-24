/*
 * Archivo: QV_WD27_ZDC17_QueryViewEvent.java
 * Fecha: 23/04/2021 06:10:59 PM
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.frntn.customevents.queryview;

import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.QueryViewEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Query
 *
 * QV_WD27_ZDC17_QueryViewEvent - Pantalla productos
 *
 */
@Component
@Service({ QueryViewEventBuilder.class })
@Properties({ @Property(name = "queryView.id", value = "QV_WD27_ZDC17") })

public class CEQV_204QV_WD27_ZDC17_533_QueryViewEvent extends QueryViewEventBuilder
 implements IGridRowDeleting
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(CEQV_204QV_WD27_ZDC17_533_QueryViewEvent.class);
    
	@Reference(name="iGridRowDeletingQV_WD27_ZDC17",referenceInterface =IGridRowDeleting.class,bind = "setiGridRowDeletingQV_WD27_ZDC17",unbind = "unsetiGridRowDeletingQV_WD27_ZDC17",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(queryView.id=QV_WD27_ZDC17)(queryView.controlId=QV_WD27_ZDC17))")
	private IGridRowDeleting iGridRowDeletingQV_WD27_ZDC17;

	public void setiGridRowDeletingQV_WD27_ZDC17(IGridRowDeleting iGridRowDeletingQV_WD27_ZDC17) {
		this.iGridRowDeletingQV_WD27_ZDC17 = iGridRowDeletingQV_WD27_ZDC17;
	}

	public void unsetiGridRowDeletingQV_WD27_ZDC17(IGridRowDeleting iGridRowDeletingQV_WD27_ZDC17) {
		this.iGridRowDeletingQV_WD27_ZDC17 = iGridRowDeletingQV_WD27_ZDC17;
	}

	@Override
	public void rowAction(DataEntity arg0, IGridRowActionEventArgs arg1) {
		try {
			iGridRowDeletingQV_WD27_ZDC17.rowAction(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addGridRowDeleting("QV_WD27_ZDC17", this);
	}
}

